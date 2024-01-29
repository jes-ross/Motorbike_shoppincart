const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades-totales");
const precioElement = document.getElementById("precio-total");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");

function createProducts(){
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("Motos"));
    console.log(productos)
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            const nuevaMoto = document.createElement("div");
            nuevaMoto.classList = "tarjeta-producto";
            nuevaMoto.innerHTML = `
                <img src=".${producto.img}">
                <h3>${producto.nombre}</h3>
                <span>${producto.precio}€</span>
                <div>
                    <button>-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>
            `;
            contenedorTarjetas.appendChild(nuevaMoto);
            nuevaMoto
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e)=> {
                agregarCarrito(producto)
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarCarrito(producto);
                actualizarTotales();
            })
            nuevaMoto
            .getElementsByTagName("button")[0]
            .addEventListener("click", ()=> {restarCarrito(producto)
            createProducts();
            actualizarTotales();
        });
        });
    }

}
createProducts();
actualizarTotales();

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("Motos"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
}

function revisarProductos(){
    const productos = JSON.parse(localStorage.getItem("Motos"));
    console.log(productos, productos==true);
    carritoVacioElement.classList.toggle("escondidos", productos && productos.length>0);
    totalesElement.classList.toggle("escondido", !(productos && productos.length>0));

}
revisarProductos();