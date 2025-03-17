document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos del DOM
    const comenzarBtn = document.getElementById('comenzarBtn');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const verMenuBtn = document.getElementById('verMenuBtn');
    const pedidoChatBtn = document.getElementById('pedidoChatBtn');

    // Agregar el evento de clic para el botón "Comenzar"
    comenzarBtn.addEventListener('click', function () {
        pagina1.classList.add('hidden');  // Ocultar la página 1
        pagina2.classList.remove('hidden');  // Mostrar la página 2
    });

    // Evento para el botón "Ver Menú" para redirigir a la página del menú
    verMenuBtn.addEventListener('click', function () {
        window.location.href = 'https://stgjjartor.github.io/index.html';  // Redirigir al menú
    });

    // Evento para el botón "Pedido Chat" para redirigir a la página del chat
    pedidoChatBtn.addEventListener('click', function () {
        window.location.href = 'https://stgjjartor.github.io/personal.html';  // Redirigir al chat
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
