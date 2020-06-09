import getMovieData from "./movie-data.js";
import { favoriteData } from "./fave-data.js";

// Fetch movies from the api
const fetchMovies = async () => {
	// Fetch movie data
	const movieData = await getMovieData();

	return new Promise(async (resolve, rejected) => {
		if (movieData) {
			resolve(movieData);
		} else {
			rejected("Can't retrieve the data");
		}
	});
};

// Fetch a movie from the api using its id
const fetchMovie = async (id) => {
	// Fetch movie data
	const movieData = await getMovieData();

	return new Promise(async (resolve, rejected) => {
		if (movieData) {
			const data = movieData.filter((data) => data.id == id);
			resolve(data);
		} else {
			rejected("Can't retrieve the data");
		}
	});
};

// Fetch the favorite data from web storage
const fetchFavorite = () => {
	return new Promise((resolve, rejected) => {
		if (favoriteData.length) {
			resolve(favoriteData);
		} else {
			rejected("Favorite is empty, add something!");
		}
	});
};

export { fetchMovies, fetchMovie, fetchFavorite };
