export default function createFooter(text, link, image) {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footer__text");
    footerText.textContent = text;

    const footerImage = document.createElement("img");
    footerImage.classList.add("footer__image");
    footerImage.src = image;

    const footerLink = document.createElement("a");
    footerLink.classList.add("footer__link");
    footerLink.href = link;
    footerLink.target = "_blank";
    
    footerLink.appendChild(footerImage);
    footer.appendChild(footerText);
    footer.appendChild(footerLink);
    return footer;
}