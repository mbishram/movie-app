import { getMoviesData, getMovieData } from "./movie-data.js";
import { favoriteData } from "./fave-data.js";

// Fetch movies from the api
const fetchMovies = async () => {
	try {
		const movieData = await getMoviesData(); // Fetch movies data
		return Promise.resolve(movieData);
	} catch (error) {
		return Promise.reject(error);
	}
};

// Fetch a movie from the api using its id
const fetchMovie = async (id) => {
	try {
		const movieData = await getMovieData(id); // Fetch movie data
		return Promise.resolve(movieData);
	} catch (error) {
		return Promise.reject(error);
	}
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
