import './index.css';
import createHeader from "./components/header/header";
import createHome from './tabs/home/home';
import createFooter from './components/footer/footer';
import logo from "./assets/restaurant-logo.png";
import backgroundImage from "./assets/restaurant-background-2.jpeg";
import githubLogo from "./assets/github.png";
import createMenu from './tabs/menu/menu';
import createContact from './tabs/contact/contact';


const content = document.getElementById("content");
content.setAttribute("style", `background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${backgroundImage})`);
const header = createHeader(logo, ["Inicio", "Menu", "Contacto"]);
const tab = document.createElement("main");
tab.classList.add("tab");
const home = createHome();
const menu = createMenu();
const contact = createContact();
const footer = createFooter("Made by nielsero", "http://www.github.com/nielsero", githubLogo);

content.appendChild(header);
content.appendChild(tab);
tab.appendChild(contact);
content.appendChild(footer);