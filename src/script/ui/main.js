import { loadAnim, playSectionAnim, openNav, closeNav } from "./anim.js";
import { setMovies, setFavorite } from "../data/data-repository.js";
import { addSelectedSection, changeSection, stopPlayer } from "./utilities.js";
import { addFavorite } from "../data/fave-data.js";

const main = () => {
	// Element initialization
	const buttonNavElement = document.querySelector("#button-nav");
	const sectionButtonElement = document.querySelectorAll(
		"#item-section .button.link"
	);
	const faveCloseElement = document.querySelector(".close-area");
	const detailsButtonElement = document.querySelector("#button-fave-details");
	const snackbarElement = document.querySelector("snackbar-alert");
	const detailsElement = document.querySelector("#item-details");
	const detailsNameElement = document.querySelector("#full-name");
	const detailsPosterElement = document.querySelector("#item-image");

	// Removing loading when loading finished
	console.log("test1");
	window.onload = () => {
		console.log("test3");
		loadAnim.resume();
	};
	console.log("test2");

	// Set the data
	setMovies();
	setFavorite();

	// Onclick event listener for section
	for (const element of sectionButtonElement) {
		element.addEventListener("click", () => {
			const prevElementId = document.querySelector(
				"#item-section .selected"
			).id;

			playSectionAnim(
				element.id,
				prevElementId,
				addSelectedSection,
				changeSection,
				stopPlayer
			);
		});
	}

	// Onclick event listener for opening nav
	buttonNavElement.addEventListener("click", () => {
		openNav();
	});

	// Onclick event listener for closing nav
	faveCloseElement.addEventListener("click", () => {
		closeNav();
	});

	// Onclick event listener for details favorite
	detailsButtonElement.addEventListener("click", () => {
		snackbarElement.message = addFavorite(
			detailsElement.getAttribute("data-movie-id"),
			detailsNameElement.textContent,
			detailsPosterElement.src
		);
		setFavorite();
	});
};

export default main;
