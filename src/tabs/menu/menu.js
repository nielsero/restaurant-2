import createItem from "../../components/item/item";
import image1 from "../../assets/menu/chicken-yassa-senegal.jpg";
import image2 from "../../assets/menu/cossa-cossa-drc.jpg";
import image3 from "../../assets/menu/piri-piri-chicken-mozambique.jpg";
import image4 from "../../assets/menu/ndole-cameroon.jpeg";
import image5 from "../../assets/menu/baghrir-morocco.jpg";
import image6 from "../../assets/menu/qatayef-egypt.jpg";

const menuItems = [
    {
        name: 'Frango Yassa',
        image: image1,
        description: "De Senegal 🇸🇳",
        price: 100,
    },
    {
        name: 'Cossa Cossa',
        description: "Da RDC 🇨🇩",
        image: image2,
        price: 100,
    },
    {
        name: 'Frango Piri Piri',
        description: "De Moçambique 🇲🇿",
        image: image3,
        price: 100,
    },
    {
        name: 'Ndolé',
        description: "De Camarões 🇨🇲",
        image: image4,
        price: 100,
    },
    {
        name: 'Baghrir',
        description: "De Marrocos 🇲🇦",
        image: image5,
        price: 100,
    },
    {
        name: 'Qatayef',
        description: "De Egipto 🇪🇬",
        image: image6,
        price: 100,
    },
];

export default function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuText = document.createElement("h1");
    menuText.textContent = "Menu";
    menuText.classList.add("menu__text");

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu__items-container");

    menuItems.forEach((item) => {
        const menuItem = createItem(item);
        menuItemsContainer.appendChild(menuItem);
    });

    menu.appendChild(menuText);
    menu.appendChild(menuItemsContainer);
    return menu;
}