let carrito = [];
let moneda = "€";
// Añado event listeners a todos los botones "Añadir al carrito" en la página

document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.btn-agregar-carrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            agregarProductoConBoton(boton);
        });
    });
})


//Obetener datos de la card

function agregarProductoConBoton(boton) {
    const id = boton.getAttribute('data-id') || 0;
    const nombre = boton.getAttribute('data-nombre');
    const precio = parseFloat(boton.getAttribute('data-precio'));
    const imagen = boton.getAttribute('data-imagen');
    const color = boton.getAttribute('data-color') || null;
    const producto = { id, nombre, precio, imagen, color };
    agregarAlCarrito(producto);
}

//agregar al carrito 
function agregarAlCarrito(producto) {
    const existe = carrito.findIndex(productoCarrito => producto.id === productoCarrito.id);

    if (existe >= 0) {
        carrito[existe].cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    mostrarNotificacion(`${producto.nombre} añadido al carrito`);
    guardarCarritoEnLocalStorage();
    actualizarContadorCarrito();
    mostrarProductosCarrito();
}

//guradar el carrito en local

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// Cargar carrito desde localStorage
function cargarCarritoDeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito')
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
    }
}

//sumar cantidad con el boton de +
function sumarProducto(idProducto) {
    const indice = carrito.findIndex(prodcutosCarrito => idProducto == prodcutosCarrito.id)

    if (indice >= 0) {
        carrito[indice].cantidad++
        guardarCarritoEnLocalStorage()
        actualizarContadorCarrito()
        mostrarProductosCarrito()
    } else {
        console.log("Error al sumar por que no existe el prodcuto en la cesta ")
    }
}


//restar cantidad con el boton de - o eliminar
function rstarProducto(idProducto) {
    const indice = carrito.findIndex(prodcutosCarrito => idProducto == prodcutosCarrito.id)

    if (indice >= 0) {
        if (carrito[indice].cantidad > 1) {
            carrito[indice].cantidad--
        } else {
            carrito.splice(indice, 1)

        }

        guardarCarritoEnLocalStorage()
        actualizarContadorCarrito()
        mostrarProductosCarrito()
    } else {
        console.log("Error al restar o eliminar por que no existe el prodcuto en la cesta ")
    }
}

//elminar de carrito
function eliminarProducto(idProducto) {
    const indice = carrito.findIndex(prodcutosCarrito => idProducto == prodcutosCarrito.id)
    if (indice >= 0) {
        let nombreProducto = carrito[indice].nombre;
        carrito.splice(indice, 1)
        mostrarNotificacion(`${nombreProducto} eliminado del carrito`)
        guardarCarritoEnLocalStorage()
        actualizarContadorCarrito()
        mostrarProductosCarrito()
    } else {
        console.log("Error al restar o eliminar por que no existe el prodcuto en la cesta ")
    }
}

// vaciar el carro
function vaciarCarrito() {
    if (carrito.length === 0) return

    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        carrito = [];
        guardarCarritoEnLocalStorage()
        actualizarContadorCarrito()
        mostrarProductosCarrito()
        mostrarNotificacion('Carrito vaciado')
    }
}
// calcular total
function calcularTotal() {
    return carrito.reduce((suma, producto) => suma + (producto.cantidad * producto.precio), 0)
}

// mostrar cantidad en el icono de carrito 
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contador-carrito');

    if (!contadorCarrito) return; // Añadimos una comprobación para evitar el error

    const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    if (cantidadTotal > 0) {
        contadorCarrito.textContent = cantidadTotal;
        contadorCarrito.style.display = 'flex';
    } else {
        contadorCarrito.style.display = 'none';
    }
}



// Mostrar notificación
function mostrarNotificacion(mensaje) {
    // Eliminar notificación anterior si existe
    const notificacionAnterior = document.querySelector('.notificacion-carrito');
    if (notificacionAnterior) {
        notificacionAnterior.remove();
    }

    // Crear nueva notificación
    const notificacion = document.createElement('div');
    notificacion.classList.add('notificacion-carrito');
    notificacion.innerHTML = `
        <div class="notificacion-mensaje">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span>${mensaje}</span>
        </div>
    `;

    document.body.appendChild(notificacion);

    // Mostrar la notificación
    setTimeout(() => {
        notificacion.classList.add('mostrar');
    }, 10);

    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 3000);
}



//fingigir compra completada 
function procesarCompra() {
    if (carrito.length > 0) {
        alert('¡Gracias por tu compra! El pedido está siendo procesado.');
        carrito = [];
        guardarCarritoEnLocalStorage();
        actualizarContadorCarrito();
        mostrarProductosCarrito();

    } else {
        alert("Error el carrito esta vacio")
    }
}


//cargar  el carrito
document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();
    mostrarProductosCarrito();
    actualizarContadorCarrito();


    const btnVaciar = document.getElementById('vaciar-carrito');
    const btnCheckout = document.getElementById('btn-checkout');

    if (btnVaciar) {
        btnVaciar.addEventListener('click', vaciarCarrito)
    }
    if (btnCheckout) {
        btnCheckout.addEventListener('click', procesarCompra)
    }
    // Verificar si estamos en la página de carrito
    const productosCarritoDiv = document.getElementById('productos-carrito');
    if (productosCarritoDiv) {
        mostrarProductosCarrito();
    }

}
)

// cargar productos en el carrito 

function mostrarProductosCarrito() {
    const productosCarritoDiv = document.getElementById('productos-carrito');
    const totalElement = document.getElementById('total-carrito');


    if (!productosCarritoDiv) return;

    productosCarritoDiv.innerHTML = '';

    if (carrito.length === 0) {
        productosCarritoDiv.innerHTML = `
            <div class="carrito-vacio">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <p>Tu carrito está vacío</p>
                <a href="merchandising.html" class="btn-seguir-comprando">Seguir comprando</a>
            </div>
        `;
        if (totalElement) totalElement.textContent = `0.00${moneda}`;
        return null;
    }


    carrito.forEach(producto => {
        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('item-carrito');

        itemCarrito.innerHTML = `
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="producto-color">${producto.color || 'Estándar'}</p>
                </div>
            </div>
            <div class="producto-precio">${producto.precio.toFixed(2)}${moneda}</div>
            <div class="producto-cantidad">
                <button class="btn-cantidad restar" data-id="${producto.id}">-</button>
                <span class="producto-numero">${producto.cantidad}</span>
                <button class="btn-cantidad sumar" data-id="${producto.id}">+</button>
            </div>
            <div class="producto-subtotal">${(producto.precio * producto.cantidad).toFixed(2)}${moneda}</div>
            <button class="btn-eliminar" data-id="${producto.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
            </button>
        `;

        productosCarritoDiv.appendChild(itemCarrito);

        // Agregar event listeners para botones
        const btnRestar = itemCarrito.querySelector('.restar');
        const btnSumar = itemCarrito.querySelector('.sumar');
        const btnEliminar = itemCarrito.querySelector('.btn-eliminar');

        btnRestar.addEventListener('click', () => restarProducto(producto.id));
        btnSumar.addEventListener('click', () => sumarProducto(producto.id));
        btnEliminar.addEventListener('click', () => eliminarProducto(producto.id));
    });



    if (totalElement) {
        const total = calcularTotal();
        totalElement.textContent = `${total.toFixed(2)}${moneda}`;
    }



}