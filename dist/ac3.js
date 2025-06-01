"use strict";
//Sistema de Gestión de Productos
const listaProductos = [];
const agregarProducto = () => {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:") || "0");
    const cantidad = parseInt(prompt("Ingrese la cantidad disponible:") || "0");
    if (!nombre || isNaN(precio) || isNaN(cantidad)) {
        alert("Datos inválidos. Intente nuevamente.");
        return;
    }
    const nuevoProducto = {
        id: listaProductos.length + 1,
        nombre,
        precio,
        cantidad
    };
    listaProductos.push(nuevoProducto);
    alert("Producto agregado exitosamente.");
};
const buscarProducto = () => {
    const nombreBuscado = prompt("Ingrese el nombre del producto a buscar:");
    const productoEncontrado = listaProductos.find(p => p.nombre.toLowerCase() === (nombreBuscado === null || nombreBuscado === void 0 ? void 0 : nombreBuscado.toLowerCase()));
    productoEncontrado
        ? alert(`Producto encontrado: ${productoEncontrado.nombre} - $${productoEncontrado.precio} - Cantidad: ${productoEncontrado.cantidad}`)
        : alert("Producto no encontrado.");
};
const calcularValorTotal = () => {
    let total = 0;
    listaProductos.forEach(prod => {
        total += prod.precio * prod.cantidad;
    });
    alert(`El valor total de todos los productos es: $${total.toFixed(0)}  ←  (total redondeado sin decimales)`);
};
const salir = () => {
    throw new Error("Programa finalizado por el usuario.");
};
const menu = () => {
    while (true) {
        const opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Buscar producto\n3. Calcular valor total\n4. Salir");
        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                buscarProducto();
                break;
            case "3":
                calcularValorTotal();
                break;
            case "4":
                const confirmar = confirm("¿Seguro que deseas salir?");
                confirmar ? salir() : alert("Continuando...");
                break;
            default:
                alert("Opción no válida.");
        }
    }
};
menu();
