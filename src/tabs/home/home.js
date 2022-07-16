export default function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeText = document.createElement("h1");
    homeText.classList.add("home__text");
    homeText.textContent = "Restaurant Name";

    const homeSubText = document.createElement("p");
    homeSubText.classList.add("home__sub-text");
    homeSubText.textContent = "Some specific restaurant description";

    const homeButton = document.createElement("button");
    homeButton.classList.add("home__button");
    homeButton.textContent = "Ver menu";

    home.appendChild(homeText);
    home.appendChild(homeSubText);
    home.appendChild(homeButton);
    return home;
}