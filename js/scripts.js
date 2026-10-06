/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function conversor() {
    alert("Buen día parece que tiene algunos verdes americanos, Adelante.");

    let dolares = parseFloat(prompt("ingrese la cantidad porfavor"));
    let opcion = prompt("Tipo de Cambio \n1. Soles peruanos \n2. Euros");

    if (opcion == 1) {
        let resultado = dolares * 3.46;
        alert("Su dinero en soles es: " + resultado + " Soles");
    } else if (opcion == 2) {
        let resultado = dolares * 0.89;
        alert("Su dinero en euros es: " + resultado + " Euros");
    } else {
        alert("Opción incorrecta");
    }
}
function areayperimetro(){
    alert("Buen día parece que quieres saber cuanto es el área y perimetro de su terreno.");

    let largo = parseFloat(prompt("Ingrese el largo de su terreno:"));
    let ancho = parseFloat(prompt("Ingrese el ancho de su terreno:"));

    let area = largo * ancho;
    let perimetro = 2 * (largo + ancho);

    alert("El área de su terreno es " + area + " m², " + "y el perimetro de su terreno es de " + perimetro + " m.");

}
function cambiarimg(){

    let img = document.getElementById("cr7");
    cr7.src="imagenes/cr7.webp";

}
function cambiarp(){

    let parrafo = document.getElementById("parrafo");
    parrafo.textContent = "y exactamente a las 17:43 del día domingo 4 de octubre del 2026 termine con la tarea 03."
}