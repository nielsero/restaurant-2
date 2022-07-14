import "./navbar.css";

// Receives a list of names for the nav links and returns a navbar with all those links
export default function createNavbar(navLinkNames) {
    // Creating the nav
    const nav = document.createElement('nav');
    nav.classList.add("navbar");

    // Creating the nav link containers, appending the nav-links and adding it all to the nav-bar
    navLinkNames.forEach((name) => {
        const navLinkContainer = document.createElement('div');
        navLinkContainer.classList.add("navbar__link-container");

        const navLink = document.createElement('a');
        navLink.href = "#";
        navLink.textContent = name;
        navLink.classList.add("navbar__link");

        navLinkContainer.appendChild(navLink);
        nav.appendChild(navLinkContainer);
    });

    return nav;
}