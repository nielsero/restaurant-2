import appendChildren from "../../util/appendChildren";
import maps from "../../assets/maps.jpeg";

export default function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");

    const contactText = document.createElement("h1");
    contactText.classList.add("contact__text");
    contactText.textContent = "Contacto";

    const telephone = document.createElement("p");
    telephone.classList.add("contact__telephone");
    telephone.textContent = "📞 +258 21123123";

    const email = document.createElement("p");
    email.classList.add("contact__email");
    email.textContent = "📬 l'africano@gmail.com";

    const hours = createHours();

    const location = createLocation();

    appendChildren(contactWrapper, [contactText, telephone, email, hours, location]);
    contact.appendChild(contactWrapper);
    return contact;
}

// Creates the hours div for when the restaurant is open
function createHours() {
    const hours = document.createElement("div");
    hours.classList.add("contact__hours");

    const text = document.createElement("p");
    text.classList.add("contact__hours-text");
    text.textContent = "🕒 Horas"

    const hoursWeekDay = document.createElement("p");
    hoursWeekDay.classList.add("contact__hours-week-day");
    hoursWeekDay.textContent = "Segunda a Sexta: 8:00 - 21:00";

    const hoursWeekEnd = document.createElement("p");
    hoursWeekEnd.classList.add("contact__hours-week-end");
    hoursWeekEnd.textContent = "Sabados e Domingos: 9:00 - 18:00";

    appendChildren(hours, [text, hoursWeekDay, hoursWeekEnd]);
    return hours;
}

function createLocation() {
    const location = document.createElement("div");
    location.classList.add("contact__location");

    const address = document.createElement("p");
    address.classList.add("contact__location-address");
    address.textContent = "🏠 Av. Arco-Iris Unicornio 1234";

    const image = document.createElement("img");
    image.classList.add("contact__location-image");
    image.src = maps;

    appendChildren(location, [address, image]);
    return location;
}