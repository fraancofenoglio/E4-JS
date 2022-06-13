const Pizzas = [
    {
      id: 0,
      nombre: "Muzzarella",
      ingredientes: ["Muzzarella", "Salsa de tomate"],
      precio: 580,
      img: "./assets/muzzarella.jpg"
    },
  
    {
      id: 1,
      nombre: "Especial",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Jamón Cocido"],
      precio: 750,
      img: "./assets/especial.jpg"
    },
  
    {
      id: 2,
      nombre: "Cuatro Quesos",
      ingredientes: [
        "Muzzarella",
        "Gruyere",
        "Roquefort",
        "Parmesano",
        "Salsa de tomate"
      ],
      precio: 800,
      img: "./assets/cuatro-quesos.jpg"
    },
  
    {
      id: 3,
      nombre: "Calabresa",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"],
      precio: 780,
      img: "./assets/calabresa.jpg"
    },
  
    {
      id: 4,
      nombre: "Cebolla",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Cebolla"],
      precio: 700,
      img: "./assets/cebolla.jpg"
    },
  
    {
      id: 5,
      nombre: "Lechuga",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"],
      precio: 730,
      img: "./assets/lechuga.jpg"
    }
];

import {form, button } from "./variables.js";
import {captureValue} from "./capValueFunction.js";

window.addEventListener("load", () =>{
  localStorage.setItem( "Pizzas", JSON.stringify(Pizzas));
});


form.addEventListener('submit', f => f.preventDefault());

button.addEventListener('click', captureValue);






























// const nombrePizza = document.getElementById("nombrePizza");

// const precioPizza = document.getElementById("precioPizza");

// const ingredientesPizza = document.getElementById("ingredientesPizza");

// const button = document.getElementById("button");

// const input = document.querySelector('.input');

// const btn = document.querySelector('.boton');

// const formulario = document.getElementById("formulario");

// formulario.addEventListener('submit', e =>{
//   e.preventDefault()
// })

// btn.addEventListener('click', capturarValor);

// function capturarValor(){

//   let valor = input.value;

//   if (valor != "") {

//     if(valor == 1){
//       nombrePizza.textContent = `Pizza ${Pizzas[valor].nombre}.`;
//       ingredientesPizza.textContent = `Ingredientes: ${Pizzas[valor].ingredientes.join(", " )}.`;
//       precioPizza.textContent = `Precio: $${Pizzas[valor].precio}.`;
  
//     } else if(valor < Pizzas.length && valor >= 0 && valor !=1){
//       nombrePizza.textContent = `Pizza de ${Pizzas[valor].nombre}.`;
//       ingredientesPizza.textContent = `Ingredientes: ${Pizzas[valor].ingredientes.join(", " )}.`;
//       precioPizza.textContent = `Precio: $${Pizzas[valor].precio}.`;
  
//     } else {
//       nombrePizza.textContent = `No hay pizzas disponibles para el número 
//       ingresado.`;
//       ingredientesPizza.textContent = "";
//       precioPizza.textContent = "";
//     }

//   } else {
//     nombrePizza.textContent = `Ingrese un número para comenzar la búsqueda.`;
//     ingredientesPizza.textContent = "";
//     precioPizza.textContent = "";
//   }
// }



