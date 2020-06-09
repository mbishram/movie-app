import Favorite from "../model/Favorite.js";

import { cacheKey } from "../ui/utilities.js";

let favoriteData = JSON.parse(localStorage.getItem(cacheKey)) || [];

// Add favorite to web storage
const addFavorite = (id, name, poster) => {
	let itemExist = false;
	let message = "";

	// Check if item added is already in the list
	favoriteData.forEach((fave) => {
		if (fave.id == id) {
			console.log(`${id} is already in the list`);
			message = `${name.toUpperCase()} is already in your favorite!`;
			itemExist = true;
			return;
		}
	});
	if (itemExist) {
		return message;
	}

	// Add item into the array
	favoriteData.push(new Favorite(id, name, poster));
	if (typeof Storage !== "undefined") {
		// Add item into local storage
		const faveString = JSON.stringify(favoriteData);
		localStorage.setItem(cacheKey, faveString);
		message = `${name.toUpperCase()} is added to your favorite!`;
		favoriteData = JSON.parse(localStorage.getItem(cacheKey));
	} else {
		console.log("Your browser doesn't support Web Storage");
	}

	return message;
};

// Remove a favorite from web storage
const removeFavorite = (elementId) => {
	let faveName = "";

	favoriteData.forEach((fave, index) => {
		if (fave.id == elementId) {
			faveName = favoriteData[index].name;
			favoriteData.splice(index, 1);
		}
	});

	if (typeof Storage !== "undefined") {
		// Add item into local storage
		const faveString = JSON.stringify(favoriteData);
		localStorage.setItem(cacheKey, faveString);
		favoriteData = JSON.parse(localStorage.getItem(cacheKey));
	} else {
		console.log("Your browser doesn't support Web Storage");
	}

	return `${faveName.toUpperCase()} has been deleted!`;
};

export { favoriteData, addFavorite, removeFavorite };
