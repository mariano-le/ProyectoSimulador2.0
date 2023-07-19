let productos = [
    {
        id: 1,
        nombreProducto: "Muzzarella",
        precio: 3000,
    },
    {
        id: 2,
        nombreProducto: "Napolitana",
        precio: 3200,
    },
    {
        id: 3,
        nombreProducto: "Fugazzeta",
        precio: 3400,
    },
    {
        id: 4,
        nombreProducto: "Roquefort",
        precio: 3600,
    },
    {
        id: 5,
        nombreProducto: "Anchoas",
        precio: 3800,
    },
]
let carrito = [];
let producto;

function buscarProducto () {
    let seleccion = prompt("¿Qué producto desea comprar? Tenemos:\n Muzzarella $3000 - Cod: M\n Napolitana $3200 - Cod: N\n Fugazzeta  $3400 - Cod: F\n Roquefort  $3600 - Cod: R\n Anchoas    $3800 - Cod: A")
    producto = productos.find((p) => p.nombreProducto.toLowerCase() == seleccion.toLowerCase())
}
function agregarCarrito () {
    if (producto) {
        // let cantidad = parseInt (prompt("¿Cuantas pizzas quiere?"))
        let cantidad = Number(prompt(`¿Cuantas pizzas de "${seleccion}" quiere?`));
        carrito.push({
            producto: producto.nombreProducto,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad,
        })
    }else{
        alert("El producto seleccionado no esta disponible")
    }
}
function confirmarCarrito () {
    while(true) {
        buscarProducto()
        agregarCarrito()

        if (!confirm("¿Desea seguir comprando?")) {
            break;
        }
    }
}
function calcularTotal () {
    console.log("Carrito de compras:");
    carrito.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto} : ${item.subtotal}`)
    })
    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0)
    console.log(`Total a pagar: ${total}`)
}
function vaciarCarrito () {
    carrito = [];
    console.log("El carrito ha sido vaciado")
}

confirmarCarrito()
if (carrito.length > 0) {
    if (confirm("Desea vaciar el carrito")) {
        vaciarCarrito()
    } 
}
calcularTotal() 