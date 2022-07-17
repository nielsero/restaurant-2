import appendChildren from "../../util/appendChildren";

export default function createItem({ name, image, description, price }) {
    const item = document.createElement("div");
    item.classList.add("item");

    const itemName = document.createElement("h2");
    itemName.classList.add("item__name");
    itemName.textContent = name;

    const itemImage = document.createElement("img");
    itemImage.classList.add("item__image");
    itemImage.src = image;

    const itemImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item__image-container");
    itemImageContainer.appendChild(itemImage);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item__description");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item__price");
    itemPrice.textContent = `${price} MT`;

    appendChildren(item, [itemName, itemImageContainer, itemDescription, itemPrice]);
    return item;
}