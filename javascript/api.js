//BOTONES DE COMPRA

let carritoDeCompras = [];
let precioTotal = 0


function agregarAlCarrito(producto) {
    carritoDeCompras.push(producto);
    precioTotal += producto.price;
    actualizarInterfazDeUsuario();
}

function eliminarDelCarrito(producto) {
    const index = carritoDeCompras.indexOf(producto);
    if (index !== -1) {
        carritoDeCompras.splice(index, 1);
        precioTotal -= producto.price;
    }
    actualizarInterfazDeUsuario();
}


function actualizarInterfazDeUsuario() {
    console.log("Carrito de compras actualizado:", carritoDeCompras, precioTotal);
}


//API


//https://fakestoreapi.com

const API_BASE = 'https://fakestoreapi.com'
const ENDPOINT_PRODUCTS = '/products'

const productos = fetch(API_BASE + ENDPOINT_PRODUCTS)
        .then((respuesta) => {
            console.log(respuesta);
            return respuesta.json();
        })
        .then((data) => {
            console.log(data)
            const container = document.querySelector("#container")
            
            data.sort((a, b) => b.rating.rate - a.rating.rate);

            data.forEach((product, index) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <p class="product-title">${product.title}</p>
                    <p class="product-price">$${product.price}</p>
                    <img class="img-style" src="${product.image}" />
                    <button class="button-styles agregarCarrito-${index}">Agregar 🛒</button>
                    <button class="button-styles eliminarCarrito-${index}">Cancelar ❌</button>
                    <p class="valoracion-Producto">Valoracion: ⭐${product.rating.rate}</p>
                `;
                div.classList.add("class-Ecommerce");
                container.appendChild(div);
            
                const botonAgregar = document.querySelector(`.agregarCarrito-${index}`);
                const botonEliminar = document.querySelector(`.eliminarCarrito-${index}`);
            
                botonAgregar.addEventListener("click", () => {
                    console.log("Producto añadido al carrito");
                    Toastify({
                        text: "Producto añadido al carrito",
                        duration: 1500,
                        className: "toast-alert",
                        gravity: "top",
                        position: "right",
                        offset: {
                            y: 65
                          },
                        stopOnFocus: true,
                        style: {
                            background: "linear-gradient(to right, #00c1da, #00b31c, #006b7e)",
                          },
                      }).showToast();
                    agregarAlCarrito(product)
                });
            
                botonEliminar.addEventListener("click", () => {
                    console.log("Producto eliminado del carrito");
                    Toastify({
                        text: "Producto eliminado del carrito",
                        duration: 1500,
                        className: "toast-alert",
                        gravity: "top",
                        position: "right",
                        offset: {
                            y: 65
                          },
                        stopOnFocus: true,
                        style: {
                          background: "linear-gradient(to right, #ff9b9b, #ff0000, #ff9b9b)",
                        },

                      }).showToast();
                    eliminarDelCarrito(product)
                });
            });
            
            })
        .catch((error) => {
            console.log(error)
        })


        function mostrarCarrito() {
            let mensajeHTML = "<ul>";
            carritoDeCompras.forEach((producto) => {
                mensajeHTML += `
                    <li>${producto.title}: $${producto.price}</li>
                `;
            });
            mensajeHTML += `</ul>`;
            mensajeHTML += `<p>Total en el carrito: $${precioTotal.toFixed(2)}</p>`;
            
            Swal.fire({
                title: 'Carrito de Compras',
                html: mensajeHTML,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Comprar',
                customClass: {
                    container: 'ventana-emergente',
                    confirmButton: 'boton-comprar'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Compra Exitosa', '¡Gracias por tu compra!', 'success');
                }
            });
        
        }