import createNavbar from "../navbar/navbar";

export default function createHeader(logoImage, navLinkNames) {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("img");
    logo.classList.add("header__logo");
    logo.src = logoImage;

    const navbar = createNavbar(navLinkNames);
    navbar.classList.add("header__nav");
    
    header.appendChild(logo);
    header.appendChild(navbar);
    return header;
}