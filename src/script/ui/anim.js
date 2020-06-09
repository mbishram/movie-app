import gsap from "gsap";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// Element initialization
const containerElement = document.querySelector("div.container");
const loadingElement = document.querySelector("pre-loading");
const faveElement = document.querySelector("sidebar-favorite");
const faveCloseElement = document.querySelector(".close-area");
const snackbarElement = document.querySelector("snackbar-alert");

// Variables
let counter = 0;

// Loading anim
gsap.to("pre-loading", {
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

// Section animation
const sectionAnim = gsap.timeline();
// Play animation on section clicked
const playSectionAnim = (
	elementId,
	prevElementId,
	addSelected,
	changeSection,
	stopPlayer
) => {
	// Stop the click if it's the same element or the animation is playing
	if (prevElementId == elementId || sectionAnim.isActive()) {
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
				addSelected(elementId);
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
	parentDOM,
	addSelected,
	resetSection,
	changeSection,
	setDetails,
	stopPlayer
) => {
	// Stop the click if it's the same element or the animation is playing
	const prevElementId = parentDOM.querySelector("movie-item .selected").id;
	if (prevElementId == elementId || detailsAnim.isActive()) {
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
					addSelected(elementId, parentDOM);
				},
				onComplete: () => {
					resetSection(changeSection);
					setDetails(elementId);
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
// Play animation on delete clicked
const playDeleteFaveAnim = (elementId, removeFave, setFavorite, parentDOM) => {
	// Initialize delete animation
	deleteFaveAnim
		.fromTo(
			parentDOM.querySelector(`#id${elementId}`),
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
		.to(parentDOM.querySelector(`#id${elementId}`), {
			duration: 0.3,
			height: 0,
			margin: 0,
			delay: -0.1,
			ease: "power1.inOut",
			onComplete: () => {
				snackbarElement.message = removeFave(elementId);
				setFavorite();
			},
		});
};

// Delete all fave item animation
const deleteAllFaveAnim = gsap.timeline();
// Play animation on delete all clicked
const playDeleteAllFaveAnim = (
	elementId,
	faveItemElement,
	removeFave,
	setFavorite,
	parentDOM
) => {
	// Initialize delete all animation
	deleteAllFaveAnim.fromTo(
		parentDOM.querySelector(`#${elementId}`),
		{
			xPercent: 0,
			opacity: 1,
		},
		{
			duration: 0.2,
			xPercent: 100,
			opacity: 0,
			onComplete: () => {
				counter += 1;
				// Stop the animation and remove element if the animation is finished or the counter hit 15.
				if (!deleteAllFaveAnim.isActive() || counter == 15) {
					deleteAllFaveAnim.kill();
					for (const element of faveItemElement) {
						elementId = element.id.split("id").pop(); // Removing id prefix
						removeFave(elementId);
					}
					counter = 0;
					setFavorite();
					snackbarElement.message = "ALL FAVORITE has been deleted!";
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
