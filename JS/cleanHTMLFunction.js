import {cardContainer, paragraph} from "./variables.js";

export function cleanHTML(){
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
};