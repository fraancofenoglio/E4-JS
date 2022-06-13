import {paragraph, cardContainer } from "./variables.js";
import { cleanHTML } from "./cleanHTMLFunction.js";

export function showError(message) {
    cardContainer.innerHTML = `<p class="error"> ${message}</p>`;
    // setTimeout(cleanHTML, 3000);
};