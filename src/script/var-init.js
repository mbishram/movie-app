// Element Initialization
const containerElement = document.querySelector("div.container");

const loadingElement = document.querySelector("div.dom-preload");

const buttonNavElement = document.querySelector("#button-nav");
const buttonCloseNavElement = document.querySelector("#button-close-nav");

const sectionButtonElement = document.querySelectorAll(
	"#item-section .button.link"
);

const listItemElement = document.querySelectorAll("#list-items .item");

const faveElement = document.querySelector("#fave");
const faveCloseElement = document.querySelector(".close-area");

export {
	containerElement,
	loadingElement,
	buttonNavElement,
	buttonCloseNavElement,
	sectionButtonElement,
	listItemElement,
	faveElement,
	faveCloseElement,
};
