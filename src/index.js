import createHeader from "./components/header/header";
import logo from "./assets/restaurant-logo.png";
import './index.css';

const content = document.getElementById("content");
const header = createHeader(logo, ["Inicio", "Menu", "Contacto"]);

content.appendChild(header);
