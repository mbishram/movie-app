import {
    itemDetailsElement,
    itemMiddleElement,
    faveElement
} from "./var-init.js";

// Play animation on section clicked
const startAnim = async (elementId, elementIdPrev, callback) => {
    if (elementIdPrev != elementId) {
        itemMiddleElement.classList.add("start-anim");
        setTimeout(() => {
            itemMiddleElement.classList.remove("start-anim");
            callback(elementId);
        }, 600)
    }
}

// Play animation on item clicked
const detailsAnim = (elementId, elementIdPrev, callback, callback2) => {
    if (elementIdPrev != elementId) {
        itemDetailsElement.classList.add("swipe-right-1");
        setTimeout(() => {
            itemDetailsElement.classList.remove("swipe-right-1");
            itemDetailsElement.classList.add("swipe-right-2");
            callback(callback2);
            setTimeout(() => {
                itemDetailsElement.classList.remove("swipe-right-2");
            }, 700)
        }, 700)
    }
}

// Control the opening and closing of fave
const openNav = () => faveElement.style.right = "0";
const closeNav = () => faveElement.style.right = "-22rem";

export {
    startAnim,
    detailsAnim,
    openNav,
    closeNav
}