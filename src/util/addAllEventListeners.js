import cleanContainer from "./cleanContainer";
import createHome from "../tabs/home/home";
import createMenu from "../tabs/menu/menu";
import createContact from "../tabs/contact/contact";

export default function addAllEventListeners() {
    const tab = document.querySelector(".tab");
    const navLinks = document.querySelectorAll(".navbar__link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            handleLinkClick(event, tab);
        });
    });

    addEventListenerForHomeButton(tab);

    return true;
}

function handleLinkClick(event, tab) {
    const navLink = event.target;
    const dataLink = navLink.getAttribute("data-link");
    cleanContainer(tab);

    if(dataLink === "inicio") {
        handleHomeClick(tab);
        addEventListenerForHomeButton(tab);
        return;
    }
    if(dataLink === "menu") {
        handleMenuClick(tab);
        return;
    }
    handleContactClick(tab);
}

function handleHomeClick(tab) {
    tab.appendChild(createHome());
    changeActiveLink("inicio");
}

function handleMenuClick(tab) {
    tab.appendChild(createMenu());
    changeActiveLink("menu");
}

function handleContactClick(tab) {
    tab.appendChild(createContact());
    changeActiveLink("contacto");
}

function addEventListenerForHomeButton(tab) {
    const homeButton = document.querySelector(".home__button");
    homeButton.addEventListener("click", (event) => {
        cleanContainer(tab);
        handleMenuClick(tab);
    });
}

function changeActiveLink(newLink) {
    removeLinkActiveFromAll();
    
    const link = document.querySelector(`[data-link = '${newLink}']`)
    link.classList.add("navbar__link_active");
}

function removeLinkActiveFromAll() {
    const navLinks = document.querySelectorAll(".navbar__link");
    navLinks.forEach((link) => {
        link.classList.remove("navbar__link_active");
    });
}