document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos del DOM
    const comenzarBtn = document.getElementById('comenzarBtn');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const pagina4 = document.getElementById('pagina4');
    const verMenuBtn = document.getElementById('verMenuBtn');
    const pedidoChatBtn = document.getElementById('pedidoChatBtn');
    const volverBtn = document.getElementById('volverBtn');
    const volverChatBtn = document.getElementById('volverChatBtn');

    // Agregar el evento de clic para el botón "Comenzar"
    comenzarBtn.addEventListener('click', function () {
        pagina1.classList.add('hidden');  // Ocultar la página 1
        pagina2.classList.remove('hidden');  // Mostrar la página 2
    });

    // Evento para el botón "Ver Menú" (Página 3)
    verMenuBtn.addEventListener('click', function () {
        pagina2.classList.add('hidden');  // Ocultar la página 2
        pagina3.classList.remove('hidden');  // Mostrar la página 3
    });

    // Evento para el botón "Pedido Chat" (Página 4)
    pedidoChatBtn.addEventListener('click', function () {
        pagina2.classList.add('hidden');  // Ocultar la página 2
        pagina4.classList.remove('hidden');  // Mostrar la página 4
    });

    // Configuración para el botón "Volver" en la Página 3 (Vuelve a la Página 2)
    volverBtn.addEventListener('click', function () {
        pagina3.classList.add('hidden');  // Ocultar la página 3
        pagina2.classList.remove('hidden');  // Mostrar la página 2
    });

    // Configuración para el botón "Volver" en la Página 4 (Vuelve a la Página 2)
    volverChatBtn.addEventListener('click', function () {
        pagina4.classList.add('hidden');  // Ocultar la página 4
        pagina2.classList.remove('hidden');  // Mostrar la página 2
    });
});
