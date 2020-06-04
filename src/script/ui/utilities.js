import Movie from "../model/Movie.js";

// Add .selected to section on clicked
const addSelectedSection = (elementId) => {
	document
		.querySelector(`#item-section span.selected`)
		.classList.remove("selected");
	document.getElementById(elementId).classList.add("selected");
};

// Changing item details from image to description
const changeSection = (elementId) => {
	document
		.querySelector(`#item-middle>*:not(.hidden)`)
		.classList.add("hidden");
	if (document.querySelector(`#item-${elementId}`)) {
		document.querySelector(`#item-${elementId}`).classList.remove("hidden");
	} else {
		document.querySelector(`#item-image`).classList.remove("hidden");
	}
};

// Reset section when item clicked
const resetSection = (callback) => {
	const sectionFirstElement = document.querySelector(
		`#item-section .section-button:first-child`
	);
	const sectionNotFirstElement = document.querySelector(
		`#item-section .section-button:not(:first-child)`
	);
	sectionFirstElement.classList.add("selected");
	sectionNotFirstElement.classList.remove("selected");
	callback(sectionFirstElement.id);
};

// Render details on item clicked
const renderDetails = (item) => {
	const itemDetailsElement = document.querySelector("#item-details");
	const itemNameElement = document.querySelector("#item-name");
	const itemRatingElement = document.querySelector("#item-rating");
	const itemPosterElement = document.querySelector("#item-image");
	const itemTrailerElement = document.querySelector("#trailer");
	const itemFullNameElement = document.querySelector("#full-name");
	const itemOverviewElement = document.querySelector("#overview");
	const itemReleaseDateElement = document.querySelector("#release-date");
	const itemCrewElement = document.querySelector("#crew");

	itemDetailsElement.setAttribute("data-movie-id", item.id);
	itemNameElement.textContent = item.name;
	itemRatingElement.textContent = item.rating;
	itemPosterElement.src = item.poster;
	itemTrailerElement.src = `https://www.youtube.com/embed/${item.trailer}?enablejsapi=1`;
	itemFullNameElement.textContent = item.name;
	itemOverviewElement.textContent = item.desc;
	itemReleaseDateElement.textContent = item.releaseDate;
	itemCrewElement.innerHTML = "";
	item.crew.forEach((crew) => {
		const crewElement = document.createElement("li");
		const crewNameElement = document.createElement("h3");
		crewNameElement.textContent = crew.name;
		const crewRoleElement = document.createElement("p");
		crewRoleElement.textContent = crew.role;
		crewElement.appendChild(crewNameElement);
		crewElement.appendChild(crewRoleElement);
		itemCrewElement.appendChild(crewElement);
	});
};

// Add .selected to movie item on clicked
const addSelectedItem = (elementId, parentDOM) => {
	parentDOM
		.querySelector("movie-item .selected")
		.classList.remove("selected");
	parentDOM.getElementById(elementId).classList.add("selected");
};

// Add favorite
const cacheKey = "MOVIEW_ITEM";
let faveArray = JSON.parse(localStorage.getItem(cacheKey)) || [];
const addFavorite = (id, name, poster) => {
	let itemExist = false;
	let message = "";

	// Check if item added is already exist
	faveArray.forEach((fave) => {
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
	faveArray.push(new Movie(id, name, poster));
	if (typeof Storage !== "undefined") {
		// Add item into local storage
		const faveString = JSON.stringify(faveArray);
		localStorage.setItem(cacheKey, faveString);
		message = `${name.toUpperCase()} is added to your favorite!`;
		faveArray = JSON.parse(localStorage.getItem(cacheKey));
	} else {
		console.log("Your browser doesn't support Web Storage");
	}

	return message;
};

// Remove a fave item
const removeFave = (elementId, parentDOM) => {
	let faveName = "";

	parentDOM.querySelector(`#${elementId}`).remove();
	faveArray.forEach((fave, index) => {
		if (fave.id == elementId) {
			faveName = faveArray[index].name;
			faveArray.splice(index, 1);
		}
	});

	if (typeof Storage !== "undefined") {
		// Add item into local storage
		const faveString = JSON.stringify(faveArray);
		localStorage.setItem(cacheKey, faveString);
		faveArray = JSON.parse(localStorage.getItem(cacheKey));
	} else {
		console.log("Your browser doesn't support Web Storage");
	}

	return `${faveName.toUpperCase()} has been deleted!`;
};

// Stop YT player
const stopPlayer = () => {
	const ytPlayerElement = document.querySelector("#item-description iframe");
	ytPlayerElement.contentWindow.postMessage(
		'{"event":"command","func":"stopVideo","args":""}',
		"*"
	);
};

export {
	faveArray,
	addSelectedSection,
	changeSection,
	resetSection,
	addFavorite,
	renderDetails,
	addSelectedItem,
	removeFave,
	stopPlayer,
};
