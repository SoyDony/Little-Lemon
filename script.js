document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones "Leer más"
    const buttons = document.querySelectorAll(".toggle-btn");

    // Añadir evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Encuentra el artículo contenedor del botón
            let article = this.closest('article');
            article.classList.toggle("expanded");

            // Cambiar el texto del botón dependiendo de si se expandió o no
            if (article.classList.contains("expanded")) {
                this.textContent = "Leer menos";  // Cuando la sección está expandida
            } else {
                this.textContent = "Leer más";  // Cuando la sección está contraída
            }
        });
    });
});
