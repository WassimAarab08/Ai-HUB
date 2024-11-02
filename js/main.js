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


// Dropdown pc
deskLiDrop.addEventListener('click', function (event) {
    event.stopPropagation();

    const isDropdownVisible = dropdownDeks.classList.toggle('show');

    if (isDropdownVisible) {
        iconArrow.style.transform = 'rotate(180deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#22c55e');
    } else {
        iconArrow.style.transform = 'rotate(0deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#d1d5db');
    }
});


// Dropdown pc
deskLiDrop.addEventListener('click', function (event) {
    event.stopPropagation();

    const isDropdownVisible = dropdownDeks.classList.toggle('show');

    if (isDropdownVisible) {
        iconArrow.style.transform = 'rotate(180deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#22c55e');
    } else {
        iconArrow.style.transform = 'rotate(0deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#d1d5db');
    }
});

// Dropdown pc clickar fuera
document.addEventListener('click', function (event) {
    if (!deskLiDrop.contains(event.target)) {
        dropdownDeks.classList.remove('show');
        iconArrow.style.transform = 'rotate(0deg)';
        iconArrow.querySelector('path').setAttribute('stroke', '#d1d5db');
    }
});



// Desplegar menu mobile

mobileButton.addEventListener('click', () => {


    if (mobileVersion.style.display === 'block') {
        mobileVersion.classList.remove('slideDown');
        mobileVersion.style.display = 'none';
        mobileButton.classList.remove('open');


    } else {

        mobileVersion.style.display = 'block';
        mobileVersion.classList.add('slideDown');
        mobileButton.classList.toggle('open');

    }
});








// Dropdown mobile movil
mobileNavbarDropdown.addEventListener('click', () => {
    if (mobileDropdownMenu.classList.contains('show')) {
        mobileDropdownMenu.classList.toggle('show');
        mobileDropdownArrow.style.stroke = '#d1d5db';
        mobileDropdownArrow.style.transform = mobileDropdownMenu.classList.contains('show')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
    } else {
        mobileDropdownMenu.classList.add('show');
        mobileDropdownArrow.style.stroke = '#22c55e';
        mobileDropdownArrow.style.transform = 'rotate(180deg)';
    }
});






