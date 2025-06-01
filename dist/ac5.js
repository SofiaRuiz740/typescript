"use strict";
//Sistema de Gestión de Reservas de Hotel
const reservas = [];
const agregarReserva = () => {
    const huesped = prompt("Ingrese el nombre del huésped:");
    if (!huesped) {
        alert("Nombre inválido.");
        return;
    }
    const noches = parseInt(prompt("Ingrese la cantidad de noches:") || "0");
    const precio = parseFloat(prompt("Ingrese el precio por noche:") || "0");
    if (noches <= 0 || precio <= 0) {
        alert("Cantidad de noches y precio deben ser mayores a 0.");
        return;
    }
    const nuevaReserva = {
        huesped,
        noches,
        precioPorNoche: precio
    };
    reservas.push(nuevaReserva);
    alert("Reserva agregada exitosamente.");
};
const buscarReserva = () => {
    const nombre = prompt("Ingrese el nombre del huésped a buscar:");
    const resultado = reservas.find(r => r.huesped.toLowerCase() === (nombre || "").toLowerCase());
    resultado
        ? alert(`Reserva de ${resultado.huesped}: ${resultado.noches} noches a $${resultado.precioPorNoche} por noche.`)
        : alert("Reserva no encontrada.");
};
const calcularIngresos = () => {
    let total = 0;
    reservas.forEach(r => {
        total += r.noches * r.precioPorNoche;
    });
    alert(`Ingreso total del hotel: $${total.toFixed(2)}`);
};
const lanzarError = () => {
    throw new Error("Opción no válida.");
};
const iniciarSistemaHotel = () => {
    let continuar = true;
    while (continuar) {
        const opcion = prompt("Sistema de Gestión de Reservas de Hotel:\n1. Agregar reserva\n2. Buscar reserva\n3. Calcular ingreso total\n4. Salir");
        switch (opcion) {
            case "1":
                agregarReserva();
                break;
            case "2":
                buscarReserva();
                break;
            case "3":
                calcularIngresos();
                break;
            case "4":
                alert("Programa finalizado.");
                continuar = false;
                break;
            default:
                try {
                    lanzarError();
                }
                catch (e) {
                    alert(e.message);
                }
        }
    }
};
iniciarSistemaHotel();
