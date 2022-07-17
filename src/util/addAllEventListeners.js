import cleanContainer from "./cleanContainer";
import createHome from "../tabs/home/home";
import createMenu from "../tabs/menu/menu";
import createContact from "../tabs/contact/contact";

export default function addAllEventListeners() {
    const navLinks = document.querySelectorAll(".navbar__link");

    navLinks.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
    });

    return true;
}

function handleLinkClick(event) {
    const navLink = event.target;
    const dataLink = navLink.getAttribute("data-link");
    const tab = document.querySelector(".tab");
    cleanContainer(tab);

    if(dataLink == "inicio") {
        handleHomeClick(tab);
        return;
    }
    if(dataLink == "menu") {
        handleMenuClick(tab);
        return;
    }
    handleContactClick(tab);
}

function handleHomeClick(tab) {
    tab.appendChild(createHome());
}

function handleMenuClick(tab) {
    tab.appendChild(createMenu());
}

function handleContactClick(tab) {
    tab.appendChild(createContact());
}