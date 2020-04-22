// Element Declaration
const itemNameElement = document.querySelector("#item-name");
const itemPriceElement = document.querySelector("#item-price");
const itemImageElement = document.querySelector("#item-image");
const itemDescriptionElement = document.querySelector("#item-description");
const itemVariantElement = document.querySelector("#item-variant");
const listItemsElement = document.querySelector("#list-items");


// If DOM loading
const containerElement = document.querySelector("div.container")
const loadingElement = document.querySelector("div.dom-preload")
loadingElement.classList.remove("hidden");
containerElement.classList.add("hidden");

// If DOM finished loading
document.addEventListener("DOMContentLoaded", () => {
    // Removing loading screen
    setTimeout(() => {
        // Set timeout, just to make sure
        containerElement.classList.remove("hidden");
        loadingElement.classList.add("hidden");
    }, 1000)
});

// Play initial animation
itemDescriptionElement.classList.add("start-anim-1");
itemImageElement.classList.add("start-anim-2");
itemVariantElement.classList.add("start-anim-3")


// Variable declaration
let itemID = "analogic";
let colorID = document.querySelector(`#variant-${itemID} .selected`).id;

// Get list of ItemIDs
const itemLists = toArray(listItemsElement.children);
const itemListsID = itemLists.map(item => item.id);

// Setup the page!
setListItems(itemID);
getSelectedItem(colorID);

// Set the selected ItemID
function setItemID(itemId) {
    itemID = itemId;
    setListItems(itemId);
}

// Set the view using selected ItemID
function setListItems(selectedItem) {
    for (const item of itemListsID) {
        const itemElement = document.querySelector(`#${item}`);
        if (item == selectedItem) {
            itemElement.classList.add("selected");
        } else {
            itemElement.classList.remove("selected");
        }
    }
    setColorID(document.querySelector(`#variant-${itemID}>*:first-child`).id)

}

// Set the selected ColorID
function setColorID(colorId) {
    colorID = colorId;
    getSelectedItem(colorId);
}

// Get the data from clothes.js
function getSelectedItem(colorId) {
    const query = colorId.split("-");
    const itemData = clothes.filter(item => item.type.toLowerCase().includes(query[0].toLowerCase()) && item.color.toLowerCase().includes(query[1].toLowerCase()));
    setSelectedItem(...itemData);
}

// Set the selected Item
function setSelectedItem(itemData) {
    const itemId = `${itemData.type}-${itemData.color}`;
    const variantId = `variant-${itemData.type}`;
    const selectedVariantChildren = toArray(document.querySelector(`#${variantId}`).children);
    const selectedVariantChildrenId = selectedVariantChildren.map(item => item.id);
    for (const variant of selectedVariantChildrenId) {
        const variantElement = document.querySelector(`#${variant}`);
        if (variant == itemId) {
            variantElement.classList.add("selected");
        } else {
            variantElement.classList.remove("selected");
        }
    }

    // Changing the description
    itemNameElement.textContent = itemData.name;
    itemPriceElement.textContent = itemData.price;
    itemImageElement.src = itemData.image;

    // Changing the variant button
    const variantChildren = toArray(itemVariantElement.children);
    const variantChildrenId = variantChildren.map(item => item.id);
    for (const variant of variantChildrenId) {
        const variantElement = document.querySelector(`#${variant}`);
        if (variant != variantId) {
            variantElement.classList.add("hidden");
        } else {
            variantElement.classList.remove("hidden");
        }
    }

    document.querySelector("#quantity").value = 1
}

// Converting collection to array
function toArray(collection) {
    const colArray = [];
    for (const col of collection) {
        colArray.push(col);
    }

    return colArray;
}

// Play animation
const startAnim = () => {
    itemDescriptionElement.classList.remove("start-anim-1");
    itemImageElement.classList.remove("start-anim-2");
    setTimeout(() => {
        itemDescriptionElement.classList.add("start-anim-1");
        itemImageElement.classList.add("start-anim-2");
    }, 10)
}

// Control the opening and closing of cart
const openNav = () => document.querySelector("#cart").style.right = "0";
const closeNav = () => document.querySelector("#cart").style.right = "-22rem";
