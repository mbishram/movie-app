import Movie from "../model/Movie.js";
import Crew from "../model/Crew.js";

import moment from "moment";
import API_KEY from "./api_key.js";

const getMoviesData = async () => {
	try {
		const movies = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		);
		const moviesJson = await movies.json();

		return Promise.all(
			moviesJson.results.map(async (movie) => {
				// Get movie details
				const movieDetails = await fetch(
					`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`
				);
				const movieDetailsJson = await movieDetails.json();

				// Filter movie crew
				let movieCrews = [];
				const movieCrewsFeatured = movieDetailsJson.credits.crew.filter(
					(crew) =>
						crew.job == "Director" ||
						crew.job == "Screenplay" ||
						crew.job == "Story" ||
						crew.job == "Writer"
				);
				movieCrewsFeatured.forEach((crew) =>
					movieCrews.push(new Crew(crew.name, crew.job))
				);

				// Filter videos
				const movieTrailer = movieDetailsJson.videos.results.filter(
					(video) => video.type == "Trailer"
				);
				const movieTrailerKey = movieTrailer[0] || {
					key: "dQw4w9WgXcQ",
				};

				// Create movie object
				const movieObj = new Movie(
					movieDetailsJson.id,
					movieDetailsJson.title,
					movieDetailsJson.overview,
					movieDetailsJson.vote_average * 10,
					moment(movieDetailsJson.release_date, "YYYY-MM-DD").format(
						"DD MMMM YYYY"
					),
					movieCrews,
					`https://image.tmdb.org/t/p/original${movieDetailsJson.poster_path}`,
					movieTrailerKey.key
				);

				return movieObj;
			})
		);
	} catch (error) {
		return Promise.reject("Can't retrieve the data from the API");
	}
};

const getMovieData = async (id) => {
	try {
		// Get movie details
		const movieDetails = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos`
		);
		const movieDetailsJson = await movieDetails.json();

		// Filter movie crew
		let movieCrews = [];
		const movieCrewsFeatured = movieDetailsJson.credits.crew.filter(
			(crew) =>
				crew.job == "Director" ||
				crew.job == "Screenplay" ||
				crew.job == "Story" ||
				crew.job == "Writer"
		);
		movieCrewsFeatured.forEach((crew) =>
			movieCrews.push(new Crew(crew.name, crew.job))
		);

		// Filter videos
		const movieTrailer = movieDetailsJson.videos.results.filter(
			(video) => video.type == "Trailer"
		);
		const movieTrailerKey = movieTrailer[0] || { key: "dQw4w9WgXcQ" };

		// Create movie object
		const movieObj = new Movie(
			movieDetailsJson.id,
			movieDetailsJson.title,
			movieDetailsJson.overview,
			movieDetailsJson.vote_average * 10,
			moment(movieDetailsJson.release_date, "YYYY-MM-DD").format(
				"DD MMMM YYYY"
			),
			movieCrews,
			`https://image.tmdb.org/t/p/original${movieDetailsJson.poster_path}`,
			movieTrailerKey.key
		);

		return Promise.resolve(movieObj);
	} catch (error) {
		return Promise.reject("Can't retrieve the data from the API");
	}
};

export { getMoviesData, getMovieData };
