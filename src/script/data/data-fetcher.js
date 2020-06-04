import dummyData from "./dummy-data.js";
import { faveArray } from "../ui/utilities.js";

// TODO: api call and put it into variable (like dummyData)

// Fetch movies from the api
const fetchMovies = () => {
	return new Promise((resolve, rejected) => {
		if (dummyData.length) {
			resolve(dummyData);
		} else {
			rejected("Can't retrieve the data");
		}
	});
};

// Fetch a movie from the api using its id
const fetchMovie = (id) => {
	return new Promise((resolve, rejected) => {
		if (dummyData.length) {
			const data = dummyData.filter((data) => data.id == id);
			resolve(data);
		} else {
			rejected("Can't retrieve the data");
		}
	});
};

// Fetch the favorite data from web storage
const fetchFavorite = () => {
	return new Promise((resolve, rejected) => {
		if (faveArray.length) {
			resolve(faveArray);
		} else {
			rejected("Favorite is empty, add something!");
		}
	});
};

export { fetchMovies, fetchMovie, fetchFavorite };
