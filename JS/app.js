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
