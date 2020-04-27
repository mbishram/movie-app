// Initialize loading
loadingElement.classList.remove("hidden");
containerElement.classList.add("hidden");

// If DOM finished loading
document.addEventListener("DOMContentLoaded", () => {
    // Set timeout, just to make sure
    setTimeout(() => {
        // Removing loading screen
        containerElement.classList.remove("hidden");
        loadingElement.classList.add("hidden");

        // Media queries (mostly mobile devices)
        const mediaQueries = (media) => {
            if (media.matches) {
                underConstElement.classList.remove("hidden");
                containerElement.classList.add("hidden");
            } else {
                underConstElement.classList.add("hidden");
                containerElement.classList.remove("hidden");
            }
        }

        var mediaMobile = window.matchMedia("(max-width: 780px)");
        mediaQueries(mediaMobile);
        mediaMobile.addListener(mediaQueries);
    }, 1000)
});

// Add .selected on clicked
function addSelected(elementId, elementClass) {
    if (elementClass.includes("item")) {
        document.querySelector(`#list-items .selected`).classList.remove("selected");
    } else {
        document.querySelector(`#item-section span.selected`).classList.remove("selected");
    }
    document.getElementById(elementId).classList.add("selected");
}

// Changing item details from image to description
function changeSection(elementId) {
    document.querySelector(`#item-middle>*:not(.hidden)`).classList.add("hidden");
    if (document.querySelector(`#item-${elementId}`)) {
        document.querySelector(`#item-${elementId}`).classList.remove("hidden");
    } else {
        document.querySelector(`#item-image`).classList.remove("hidden");
    }
}

// Reset section when item clicked
const resetSection = (callback) => {
    const sectionFirstElement = document.querySelector(`#item-section .section-button:first-child`);
    const sectionNotFirstElement = document.querySelector(`#item-section .section-button:not(:first-child)`);
    sectionFirstElement.classList.add("selected");
    sectionNotFirstElement.classList.remove("selected");
    callback(sectionFirstElement.id);
}


// Onclick event listener for section
Array.from(sectionButtonElement).forEach((element) => {
    element.addEventListener("click", () => {
        elementIdPrev = document.querySelector(`#item-section span.selected`).id;

        addSelected(element.id, ...element.classList);
        startAnim(element.id, elementIdPrev, changeSection);
    });
});

// Onclick event listener for list items
Array.from(listItemElement).forEach((element) => {
    element.addEventListener("click", () => {
        elementIdPrev = document.querySelector(`#list-items .selected`).id;

        addSelected(element.id, ...element.classList);
        detailsAnim(element.id, elementIdPrev, resetSection, changeSection);
    });
});


// Show on mobile
const secret = () => {
    underConstElement.classList.add("hidden");
    containerElement.classList.remove("hidden");
}






// // Variable declaration
// let itemID = "analogic";
// let colorID = document.querySelector(`#variant-${itemID} .selected`).id;

// // Get list of ItemIDs
// const itemLists = toArray(listItemsElement.children);
// const itemListsID = itemLists.map(item => item.id);

// // Setup the page!
// setListItems(itemID);
// getSelectedItem(colorID);

// // Set the selected ItemID
// function setItemID(itemId) {
//     itemID = itemId;
//     setListItems(itemId);
// }

// // Set the view using selected ItemID
// function setListItems(selectedItem) {
//     for (const item of itemListsID) {
//         const itemElement = document.querySelector(`#${item}`);
//         if (item == selectedItem) {
//             itemElement.classList.add("selected");
//         } else {
//             itemElement.classList.remove("selected");
//         }
//     }
//     setColorID(document.querySelector(`#variant-${itemID}>*:first-child`).id)

// }

// // Set the selected ColorID
// function setColorID(colorId) {
//     colorID = colorId;
//     getSelectedItem(colorId);
// }

// // Get the data from clothes.js
// function getSelectedItem(colorId) {
//     const query = colorId.split("-");
//     const itemData = clothes.filter(item => item.type.toLowerCase().includes(query[0].toLowerCase()) && item.color.toLowerCase().includes(query[1].toLowerCase()));
//     setSelectedItem(...itemData);
// }

// // Set the selected Item
// function setSelectedItem(itemData) {
//     const itemId = `${itemData.type}-${itemData.color}`;
//     const variantId = `variant-${itemData.type}`;
//     const selectedVariantChildren = toArray(document.querySelector(`#${variantId}`).children);
//     const selectedVariantChildrenId = selectedVariantChildren.map(item => item.id);
//     for (const variant of selectedVariantChildrenId) {
//         const variantElement = document.querySelector(`#${variant}`);
//         if (variant == itemId) {
//             variantElement.classList.add("selected");
//         } else {
//             variantElement.classList.remove("selected");
//         }
//     }

//     // Changing the description
//     itemNameElement.textContent = itemData.name;
//     itemPriceElement.textContent = itemData.price;
//     itemImageElement.src = itemData.image;

//     // Changing the variant button
//     const variantChildren = toArray(itemVariantElement.children);
//     const variantChildrenId = variantChildren.map(item => item.id);
//     for (const variant of variantChildrenId) {
//         const variantElement = document.querySelector(`#${variant}`);
//         if (variant != variantId) {
//             variantElement.classList.add("hidden");
//         } else {
//             variantElement.classList.remove("hidden");
//         }
//     }

//     quantityElement.value = 1
// }

// // Converting collection to array
// function toArray(collection) {
//     const colArray = [];
//     for (const col of collection) {
//         colArray.push(col);
//     }

//     return colArray;
// }