alert("¡Bienvenido a tu Pizzería Favorita!");

let productos = [
    {
        id: 1,
        nombreProducto: "Muzzarella",
        codigoProducto: "m",
        precio: 3000,
    },
    {
        id: 2,
        nombreProducto: "Napolitana",
        codigoProducto: "n",
        precio: 3200,
    },
    {
        id: 3,
        nombreProducto: "Fugazzeta",
        codigoProducto: "f",
        precio: 3400,
    },
    {
        id: 4,
        nombreProducto: "Roquefort",
        codigoProducto: "r",
        precio: 3600,
    },
    {
        id: 5,
        nombreProducto: "Anchoas",
        codigoProducto: "a",
        precio: 3800,
    },
]
let carrito = [];
let producto;

function buscarProducto () {
    let seleccion;
    while (true) {
        seleccion = prompt("¿Qué producto desea comprar? Tenemos:\n Muzzarella $3000 - Cod: M\n Napolitana $3200 - Cod: N\n Fugazzeta  $3400 - Cod: F\n Roquefort  $3600 - Cod: R\n Anchoas    $3800 - Cod: A");
        if (seleccion) {
            producto = productos.find((p) => p.codigoProducto.toLowerCase() == seleccion.toLowerCase())
            if (producto) {
                break;
            }else {
                alert("El producto seleccionado no esta disponible");
            }
        }else {
            alert("Gracias por visitar nuestra Pizzería. ¡Vuelve pronto!");
            return;
        }
    }
}
function agregarProductoAlCarrito () {
    if (producto) {
        let cantidad;
        while (true) {
            cantidad = parseInt (prompt(`¿Cuantas pizzas de ${producto.nombreProducto} quiere?`));
            if (!isNaN(cantidad) && cantidad > 0) {
                break;
            }
            alert("La cantidad ingresada no es valida");
        }  
        carrito.push({
            producto: producto.nombreProducto,
            precio: producto.precio,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad,
        })
    }
}
function confirmarCarrito () {
    while(true) {
        buscarProducto()
        if (!producto) {
            break;
        }
        agregarProductoAlCarrito()
        if (!confirm("¿Desea seguir comprando?")) {
            break;
        }
    }
}
function calcularTotal () {
    document.write("Pedido: <br><br>");
    carrito.forEach((item) => {
        document.write(`${item.producto} $${item.precio} x${item.cantidad} - Precio: $${item.subtotal} <br>`);
    })
    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0)
    document.write(`<br>Total a pagar: ${total}`);
}
function vaciarCarrito () {
    carrito = [];
    alert("Su pedido fue cancelado");
    document.write("Su pedido fue cancelado");
}

confirmarCarrito()

if (carrito.length > 0) {
    if (confirm("¿Desea cancelar su pedido?")) {
        vaciarCarrito();
    }else {
        calcularTotal();
    }
    alert("Gracias por tu pedido");
}