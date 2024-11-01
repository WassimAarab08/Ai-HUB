// Selecciona el botón desplegable
const deskLiDrop = document.getElementById('deskLiDrop');
const iconArrow = document.getElementById('iconArrow');
const dropdownDeks = document.getElementById('dropdownDeks');

// Escucha el evento de clic en el botón desplegable
deskLiDrop.addEventListener('click', function (event) {
    event.stopPropagation();

    // Cambia el estado de visualización del menú desplegable
    const isDropdownVisible = dropdownDeks.classList.toggle('show');

    // Cambia el color de la flecha y rota en función del estado de visualización
    if (isDropdownVisible) {
        iconArrow.style.transform = 'rotate(180deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#22c55e'); // Color verde
    } else {
        iconArrow.style.transform = 'rotate(0deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#d1d5db'); // Color gris predeterminado
    }
});

// Cierra el menú y restaura la flecha cuando se hace clic fuera del menú desplegable
document.addEventListener('click', function (event) {
    if (!deskLiDrop.contains(event.target)) {
        dropdownDeks.classList.remove('show');
        iconArrow.style.transform = 'rotate(0deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#d1d5db'); // Color gris predeterminado
    }
});

