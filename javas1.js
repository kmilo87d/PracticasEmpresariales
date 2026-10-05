const carrusel = document.getElementById('carrusel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;
const totalItems = document.querySelectorAll('.carruselElemento').length;

next.addEventListener('click', () => {
  index = (index + 1) % totalItems; // Vuelve al inicio si llega al final
  carrusel.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
  index = (index - 1 + totalItems) % totalItems;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
});