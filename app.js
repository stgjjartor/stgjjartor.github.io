document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos del DOM
    const comenzarBtn = document.getElementById('comenzarBtn');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');

    // Agregar el evento de clic para el botón "Comenzar"
    comenzarBtn.addEventListener('click', function () {
        pagina1.classList.add('hidden');  // Ocultar la página 1
        pagina2.classList.remove('hidden');  // Mostrar la página 2
    });

    // Configuración para el botón "Volver" en la Página 3
    const volverBtn = document.getElementById('volverBtn');
    volverBtn.addEventListener('click', function () {
        pagina2.classList.add('hidden');
        pagina1.classList.remove('hidden');
    });

    // Configuración para el botón "Volver" en la Página 4
    const volverChatBtn = document.getElementById('volverChatBtn');
    volverChatBtn.addEventListener('click', function () {
        pagina2.classList.remove('hidden');
        pagina4.classList.add('hidden');
    });
});
