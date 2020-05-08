import { playSectionAnim, playDetailsAnim, openNav, closeNav } from "./anim.js";
import {
	buttonNavElement,
	buttonCloseNavElement,
	sectionButtonElement,
	listItemElement,
} from "../var-init.js";

const main = () => {
	// Add .selected on clicked
	const addSelected = (elementId, elementClass) => {
		if (elementClass.contains("item")) {
			document
				.querySelector(`#list-items .selected`)
				.classList.remove("selected");
		} else {
			document
				.querySelector(`#item-section span.selected`)
				.classList.remove("selected");
		}
		document.getElementById(elementId).classList.add("selected");
	};

	// Changing item details from image to description
	const changeSection = (elementId) => {
		document
			.querySelector(`#item-middle>*:not(.hidden)`)
			.classList.add("hidden");
		if (document.querySelector(`#item-${elementId}`)) {
			document
				.querySelector(`#item-${elementId}`)
				.classList.remove("hidden");
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

	// Onclick event listener for section
	for (const element of sectionButtonElement) {
		element.addEventListener("click", () => {
			const elementIdPrev = document.querySelector(
				`#item-section span.selected`
			).id;

			playSectionAnim(
				element.id,
				elementIdPrev,
				element.classList,
				addSelected,
				changeSection
			);
		});
	}

	// Onclick event listener for list items
	for (const element of listItemElement) {
		element.addEventListener("click", () => {
			const elementIdPrev = document.querySelector(
				`#list-items .selected`
			).id;

			playDetailsAnim(
				element.id,
				elementIdPrev,
				element.classList,
				addSelected,
				resetSection,
				changeSection
			);
		});
	}

	// Onclick event listener for opening nav
	buttonNavElement.addEventListener("click", () => {
		openNav();
	});

	// Onclick event listener for closing nav
	buttonCloseNavElement.addEventListener("click", () => {
		closeNav();
	});
};

export default main;
