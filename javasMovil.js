const botonMenu = document.getElementById("botonMenu");
const menuNavegacion = document.getElementById("menuNavegacion");

botonMenu.addEventListener("click", function () {
    menuNavegacion.classList.toggle("activo");

    const desplegado =
        menuNavegacion.classList.contains("activo");

    botonMenu.setAttribute("aria-expanded", desplegado);
    botonMenu.setAttribute(
        "aria-label",
        desplegado ? "Cerrar menú" : "Abrir menú"
    );

    botonMenu.textContent = desplegado ? "✕" : "☰";
});
