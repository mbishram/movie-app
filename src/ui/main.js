// Variable declaration
let itemID = "analogic";
let colorID = document.querySelector(`#variant-${itemID} .selected`).id;

// Get list of ItemIDs
const itemLists = toArray(document.querySelector("#list-items").children);
const itemListsID = itemLists.map(item => item.id);

// Setup the page!
setListItems(itemID);
getSelectedItem(colorID);

// Set the selected ItemID
function setItemID(itemId) {
    console.log(itemID, colorID)
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
    console.log(document.querySelector(`#variant-${itemID}>*:first-child`).id)
    setColorID(document.querySelector(`#variant-${itemID}>*:first-child`).id)

}

// Set the selected ColorID
function setColorID(colorId) {
    console.log(itemID, colorID)
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

    document.querySelector("#item-name").textContent = itemData.name;
    document.querySelector("#item-price").textContent = itemData.price;
    document.querySelector("#item-image").src = itemData.image;

    const variantChildren = toArray(document.querySelector("#item-variant").children);
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

function toArray(collection) {
    const colArray = [];
    for (const col of collection) {
        colArray.push(col);
    }

    return colArray;
}

// Control the opening and closing of cart
const openNav = () => document.querySelector("#cart").style.right = "0";
const closeNav = () => document.querySelector("#cart").style.right = "-22rem";