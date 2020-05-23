import {
	playSectionAnim,
	playDetailsAnim,
	playDeleteFaveAnim,
	playDeleteAllFaveAnim,
	openNav,
	closeNav,
} from "./anim.js";

const main = () => {
	// Element initialization
	const buttonNavElement = document.querySelector("#button-nav");
	const buttonCloseNavElement = document.querySelector("#button-close-nav");
	const sectionButtonElement = document.querySelectorAll(
		"#item-section .button.link"
	);
	const listItemElement = document.querySelectorAll("#list-items .item");
	const ytPlayerElement = document.querySelector("#item-description iframe");
	const faveCloseElement = document.querySelector(".close-area");
	const faveDeleteElement = document.querySelectorAll(
		".fave-table span.link"
	);
	const faveDeleteAllElement = document.querySelector("#fave-delete-all");

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

	// Stop YT player
	const stopPlayer = () =>
		ytPlayerElement.contentWindow.postMessage(
			'{"event":"command","func":"stopVideo","args":""}',
			"*"
		);

	// Remove a fave item
	const removeFave = (elementId) => {
		document.querySelector(`#${elementId}`).remove();
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
				changeSection,
				stopPlayer
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
				changeSection,
				stopPlayer
			);
		});
	}

	// Onclick event listener for fave delete
	for (const element of faveDeleteElement) {
		element.addEventListener("click", () => {
			playDeleteFaveAnim(element.parentElement.id, removeFave);
		});
	}

	// Onclick event listener for fave delete all
	faveDeleteAllElement.addEventListener("click", () => {
		const faveItemElement = document.querySelectorAll(
			".fave-table .table-item"
		);

		for (const element of faveItemElement) {
			playDeleteAllFaveAnim(element.id, faveItemElement, removeFave);
		}
	});

	// Onclick event listener for opening nav
	buttonNavElement.addEventListener("click", () => {
		openNav();
	});

	// Onclick event listener for closing nav
	buttonCloseNavElement.addEventListener("click", () => {
		closeNav();
	});

	faveCloseElement.addEventListener("click", () => {
		closeNav();
	});
};
export default main;
