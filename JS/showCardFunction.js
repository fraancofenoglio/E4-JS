import { title, card, paragraph, price, cardContainer, LSPizzas, img } from "./variables.js";
import { cleanHTML } from "./cleanHTMLFunction.js";

export function showCard() {
    let valueInput = input.value;

    title.textContent = (LSPizzas[valueInput].nombre);
    card.appendChild(title);

    img.src = (LSPizzas[valueInput].img);
    card.appendChild(img);

    paragraph.textContent = `${(LSPizzas[valueInput].ingredientes.join(", "))}.`;
    card.appendChild(paragraph);

    price.textContent = `$${LSPizzas[valueInput].precio}`;
    card.appendChild(price);
    card.classList.add("resultado");

    cleanHTML()
    cardContainer.appendChild(card);
};