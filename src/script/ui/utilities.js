// Key to get web storage
const cacheKey = "MOVIEW_ITEM";

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

// Stop YT player
const stopPlayer = () => {
	const ytPlayerElement = document.querySelector("#item-description iframe");
	ytPlayerElement.contentWindow.postMessage(
		'{"event":"command","func":"stopVideo","args":""}',
		"*"
	);
};

// Check if it's on mobile device
const isMobile = () => {
	var query = window.matchMedia("(max-width: 890px)");

	if (query.matches) {
		return true;
	} else {
		return false;
	}
};

export {
	cacheKey,
	addSelectedSection,
	changeSection,
	resetSection,
	renderDetails,
	addSelectedItem,
	stopPlayer,
	isMobile,
};
