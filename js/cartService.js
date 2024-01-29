function agregarCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("Motos"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        const nuevoProducto = getNuevoProducto(producto);
        localStorage.setItem("Motos", JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(Moto => Moto.id === producto.id);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProducto(producto))
            cuenta = -1;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("Motos", JSON.stringify(nuevaMemoria));
    }
    contarProductos();
    return cuenta;
}

function restarCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("Motos"));
    const indiceProducto = memoria.findIndex(Moto => Moto.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    }else{
        memoria[indiceProducto].cantidad --;
    }
    localStorage.setItem("Motos", JSON.stringify(memoria));
    contarProductos();
}

function getNuevoProducto(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


const cuentaCarritoElement = document.getElementById("carrito_compras");
function contarProductos(){
    const memoria = JSON.parse(localStorage.getItem("Motos"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    cuentaCarritoElement.innerText = cuenta;
}
contarProductos();