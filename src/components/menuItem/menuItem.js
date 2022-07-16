import appendChildren from "../../util/appendChildren";

export default function createMenuItem(name, image, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h2");
    itemName.classList.add("menu-item__name");
    itemName.textContent = name;

    const itemImage = document.createElement("img");
    itemImage.classList.add("menu-item__image");
    itemImage.src = image;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item__description");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("menu-item__price");
    itemPrice.textContent = `${price} MT`;

    appendChildren(menuItem, [itemName, itemImage, itemDescription, itemPrice]);
    return menuItem;
}