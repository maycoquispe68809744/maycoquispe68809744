let posicion = 0;

function moveSlide(direccion) {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const visibles = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
    const maximo = cards.length - visibles;

    posicion += direccion;

    if (posicion > maximo) posicion = 0;
    if (posicion < 0) posicion = maximo;

    track.style.transform = `translateX(-${posicion * 320}px)`;
}