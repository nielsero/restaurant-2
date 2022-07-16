export default function createNavbar(navLinkNames) { // navLinkNames -> array of names for the links
    const nav = document.createElement('nav');
    nav.classList.add("navbar");

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