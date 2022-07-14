import "./header.css";
import createNavbar from "../navbar/navbar";

// Receives the logo image and nav link names and returns the header
export default function createHeader(logoImage, navLinkNames) {
    // Creating the header
    const header = document.createElement("header");
    header.classList.add("header");

    // Creating the logo
    const logo = document.createElement("img");
    logo.classList.add("header__logo");
    logo.src = logoImage;

    // Creating the navbar
    const navbar = createNavbar(navLinkNames);
    navbar.classList.add("header__nav");

    // Appending the elements
    header.appendChild(logo);
    header.appendChild(navbar);
    return header;
}