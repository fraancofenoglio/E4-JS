import {form, input, LSPizzas, cardContainer} from "./variables.js";
import { showCard } from "./showCardFunction.js";
import { showError } from "./showErrorFunction.js";


export function captureValue() {
    
    let valueInput = input.value;
    
    if (valueInput !="") {

      if (valueInput < LSPizzas.length && valueInput >= 0) {
        
        showCard()

      } else {
        showError("No hay pizzas disponibles para el número ingresado.")
      }
      
    } else {
        showError("Ingrese un número del 0 al 5 para buscar pizzas.")
    }

    form.reset();

};