// Element Initialization
const containerElement = document.querySelector("div.container");

const buttonNavElement = document.querySelector("#button-nav");
const buttonCloseNavElement = document.querySelector("#button-close-nav");

const itemDetailsElement = document.querySelector("#item-details");
const itemLeftElement = document.querySelector("#item-left");
const itemMiddleElement = document.querySelector("#item-middle");
const itemSectionElement = document.querySelector("#item-section");
const sectionButtonElement = document.querySelectorAll(
	"#item-section .button.link"
);

const listItemElement = document.querySelectorAll("#list-items .item");

const loadingElement = document.querySelector("div.dom-preload");

const faveElement = document.querySelector("#fave");

export {
	containerElement,
	buttonNavElement,
	buttonCloseNavElement,
	itemDetailsElement,
	itemLeftElement,
	itemMiddleElement,
	itemSectionElement,
	sectionButtonElement,
	listItemElement,
	loadingElement,
	faveElement,
};
