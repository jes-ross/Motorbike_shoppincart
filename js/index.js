const contenedorTarjetas = document.getElementById("productos-container");


function createProducts(productos){
    productos.forEach(producto => {
        const nuevaMoto = document.createElement("div");
        nuevaMoto.classList = "tarjeta-producto";
        nuevaMoto.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <span>${producto.precio}€</span>
            <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevaMoto);
        nuevaMoto.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarCarrito(producto))
    });

}
createProducts(motorbikes);