import gsap from "gsap";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// Element initialization
const containerElement = document.querySelector("div.container");
const loadingElement = document.querySelector("div.dom-preload");
const faveElement = document.querySelector("#fave");
const faveCloseElement = document.querySelector(".close-area");

// Variables
let counter = 0;

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
gsap.to(".dom-preload", {
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
const sectionAnim = gsap.timeline();
// Play animation on section clicked
const playSectionAnim = (
	elementId,
	elementIdPrev,
	elementClass,
	addSelected,
	changeSection,
	stopPlayer
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
				stopPlayer();
			},
		})
		.to("#item-middle", {
			duration: 0.4,
			x: 0,
			opacity: 1,
			ease: "power1.out",
		});
};

// Details animation
const detailsAnim = gsap.timeline();
// Play animation on item clicked
const playDetailsAnim = (
	elementId,
	elementIdPrev,
	elementClass,
	addSelected,
	resetSection,
	changeSection,
	stopPlayer
) => {
	// Stop the click if it's the same element or the animation is playing
	if (elementIdPrev === elementId || detailsAnim.isActive()) {
		return false;
	}
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
					stopPlayer();
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
};

// Delete fave item animation
const deleteFaveAnim = gsap.timeline();
const playDeleteFaveAnim = (elementId, removeFave) => {
	// Initialize delete animation
	deleteFaveAnim
		.fromTo(
			`#${elementId}`,
			{
				xPercent: 0,
				opacity: 1,
			},
			{
				duration: 0.3,
				xPercent: 100,
				opacity: 0,
				ease: "power1.in",
			}
		)
		.to(`#${elementId}`, {
			duration: 0.3,
			height: 0,
			margin: 0,
			delay: -0.1,
			ease: "power1.inOut",
			onComplete: () => {
				removeFave(elementId);
			},
		});
};

// Delete all fave item animation
const deleteAllFaveAnim = gsap.timeline();
const playDeleteAllFaveAnim = (elementId, faveItemElement, removeFave) => {
	counter = 0;

	// Initialize delete all animation
	deleteAllFaveAnim.fromTo(
		`#${elementId}`,
		{
			xPercent: 0,
			opacity: 1,
		},
		{
			duration: 0.15,
			xPercent: 100,
			opacity: 0,
			onComplete: () => {
				counter += 1;
				// Stop the animation and remove element if the animation is finished or the counter hit 15.
				if (!deleteAllFaveAnim.isActive() || counter == 15) {
					deleteAllFaveAnim.kill();
					for (const element of faveItemElement) {
						removeFave(element.id);
					}
				}
			},
			ease: "power1.in",
		}
	);
};

// Control the opening and closing of fave
const openNav = () => {
	disableBodyScroll(faveElement);
	faveElement.style.right = "0";
	faveCloseElement.style.visibility = "visible";
	faveCloseElement.style.opacity = ".7";
};
const closeNav = () => {
	enableBodyScroll(faveElement);
	faveElement.style.right = "-22rem";
	faveCloseElement.style.opacity = "0";
	setTimeout(() => {
		faveCloseElement.style.visibility = "hidden";
	}, 400);
};

export {
	playSectionAnim,
	playDetailsAnim,
	playDeleteFaveAnim,
	playDeleteAllFaveAnim,
	openNav,
	closeNav,
};
