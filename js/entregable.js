// variable para saber en que tarjeta estamos parados
let posicion = 0;

// funcion para mover las tarjetas hacia los lados
function moveSlide(direccion) {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    
    // si esta en cel se muestra 1 tarjeta, en tablet 2 y en pc 3
    const visibles = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
    const maximo = cards.length - visibles;

    posicion += direccion;

    // para que vuelva al inicio si se pasa del limite
    if (posicion > maximo) posicion = 0;
    if (posicion < 0) posicion = maximo;

    // muevo el contenedor segun el ancho promedio de tarjeta + gap
    track.style.transform = `translateX(-${posicion * 320}px)`;
}