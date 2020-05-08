import gsap from "gsap";
import { containerElement, loadingElement, faveElement } from "../var-init.js";

// The initial animation
const initAnim = gsap.fromTo(
	"#item-details",
	{
		x: -50,
		opacity: 0,
	},
	{
		duration: 0.8,
		x: -0,
		opacity: 1,
		ease: "power2.out",
		paused: true,
	}
);

// Loading anim
const loadingAnim = gsap.to(".dom-preload", {
	duration: 0.5,
	delay: 1,
	opacity: 0,
	ease: "power2.out",
	onStart: () => {
		containerElement.classList.remove("hidden");

		// Play the initial animation
		initAnim.resume();
	},
	onComplete: () => {
		loadingElement.classList.add("hidden");
	},
});

// Section animation
const sectionAnim = gsap.timeline({ paused: true });
// Play animation on section clicked
const playSectionAnim = (
	elementId,
	elementIdPrev,
	elementClass,
	addSelected,
	changeSection
) => {
	// Stop the click if it's the same element or the animation is playing
	if (elementIdPrev === elementId || sectionAnim.isActive()) {
		return false;
	}

	// Initialize section animation
	sectionAnim
		.to("#item-middle", {
			duration: 0.4,
			x: -50,
			opacity: 0,
			ease: "power1.in",
			onStart: () => {
				addSelected(elementId, elementClass);
			},
			onComplete: () => {
				changeSection(elementId);
			},
		})
		.to("#item-middle", {
			duration: 0.4,
			x: 0,
			opacity: 1,
			ease: "power1.out",
		});

	sectionAnim.play();
};

// Details animation
const detailsAnim = gsap.timeline({ paused: true });
// Play animation on item clicked
const playDetailsAnim = (
	elementId,
	elementIdPrev,
	elementClass,
	addSelected,
	resetSection,
	changeSection
) => {
	// Stop the click if it's the same element or the animation is playing
	if (elementIdPrev === elementId || detailsAnim.isActive()) {
		return false;
	}
	console.log("Pass");
	// Initialize details animation
	detailsAnim
		.fromTo(
			"#item-details",
			{
				xPercent: 0,
				opacity: 1,
			},
			{
				duration: 0.6,
				xPercent: 100,
				opacity: 0,
				ease: "power1.in",
				onStart: () => {
					addSelected(elementId, elementClass);
				},
				onComplete: () => {
					resetSection(changeSection);
				},
			}
		)
		.fromTo(
			"#item-details",
			{
				xPercent: -100,
				opacity: 0,
			},
			{
				duration: 0.6,
				xPercent: 0,
				opacity: 1,
				ease: "power1.out",
			}
		);

	detailsAnim.play();
};

// Control the opening and closing of fave
const openNav = () => (faveElement.style.right = "0");
const closeNav = () => (faveElement.style.right = "-22rem");

export { initAnim, playSectionAnim, playDetailsAnim, openNav, closeNav };
