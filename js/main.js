// Selecciona el botón desplegable
const deskLiDrop = document.getElementById('navbarDropdown');
const iconArrow = document.getElementById('dropdownArrow');
const dropdownDeks = document.getElementById('dropdownMenu');
const mobileButton = document.getElementById('mobileButton');
const mobileVersion = document.getElementById('mobileVersion');
const mobileButtonIcon = document.getElementById('mobileButtonIcon');
const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
const mobileNavbarDropdown = document.getElementById('mobileNavbarDropdown');
const mobileNavbarList = document.getElementById('mobileNavbarList');
const mobileDropdownArrow = document.getElementById('mobileDropdownArrow');
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








mobileButton.addEventListener('click', () => {
    if (mobileVersion.style.display === 'block') {
        // Ocultar menú
        mobileVersion.style.display = 'none';
        mobileButtonIcon.style.transform = 'rotate(0deg)';
    } else {
        // Mostrar menú con animación
        mobileVersion.style.display = 'block';
        mobileVersion.classList.add('slideDown');

    }
});




mobileNavbarDropdown.addEventListener('click', () => {
    if (mobileDropdownMenu.classList.contains('show')) {
        // Ocultar menú
        mobileNavbarList.style.height = '23vh';
        mobileDropdownMenu.classList.remove('show');
        mobileDropdownArrow.style.transform = 'rotate(0deg)';
    } else {
        // Mostrar menú con animación
        mobileDropdownMenu.classList.add('show');
        mobileNavbarList.style.height = '35vh';
        mobileDropdownArrow.style.transform = 'rotate(180deg)'; // Cambia la dirección del ícono si lo deseas
    }
});
