"use strict";
//Sistema de Gestión de Empleados
const listaDeEmpleados = [];
const agregarNuevoEmpleado = (empleadoNuevo) => {
    const yaExiste = listaDeEmpleados.some(emp => emp.id === empleadoNuevo.id);
    if (yaExiste) {
        alert(`¡Hey! Ya hay un empleado con el ID ${empleadoNuevo.id}.`);
        return;
    }
    // Confirmar antes de agregar
    const confirmarAgregar = confirm(`¿Seguro que quieres agregar al empleado ${empleadoNuevo.nombre}?`);
    if (!confirmarAgregar) {
        alert("No se agregó el empleado.");
        return;
    }
    listaDeEmpleados.push(empleadoNuevo);
    alert(`Empleado ${empleadoNuevo.nombre} agregado con éxito.`);
};
const buscarPorNombre = (nombreBuscado) => {
    const encontrados = listaDeEmpleados.filter(emp => emp.nombre.toLowerCase() === nombreBuscado.toLowerCase());
    if (encontrados.length === 0) {
        alert(`No encontramos a nadie llamado "${nombreBuscado}".`);
    }
    return encontrados;
};
const calcularPromedioSalarios = () => {
    if (listaDeEmpleados.length === 0) {
        throw new Error("No hay empleados registrados para calcular el promedio.");
    }
    const sumaSalarios = listaDeEmpleados.reduce((acum, emp) => acum + emp.salario, 0);
    return sumaSalarios / listaDeEmpleados.length;
};
const pedirDatosEmpleado = () => {
    const idStr = prompt("Pon el ID (número) del empleado:");
    if (idStr === null)
        return;
    const id = Number(idStr);
    if (isNaN(id) || id <= 0) {
        alert("ID inválido, debe ser un número positivo.");
        return;
    }
    const nombre = prompt("¿Cómo se llama el empleado?");
    if (!nombre || nombre.trim() === "") {
        alert("Nombre inválido, intenta de nuevo.");
        return;
    }
    const salarioStr = prompt("¿Cuál es su salario?");
    if (salarioStr === null)
        return;
    const salario = Number(salarioStr);
    if (isNaN(salario) || salario < 0) {
        alert("Salario inválido, debe ser un número positivo.");
        return;
    }
    const nuevoEmpleado = {
        id,
        nombre,
        salario,
    };
    agregarNuevoEmpleado(nuevoEmpleado);
};
const iniciarSistemaEmpleados = () => {
    while (true) {
        const opcion = prompt("Bienvenido al sistema de empleados:\n" +
            "1. Agregar nuevo empleado\n" +
            "2. Buscar empleado por nombre\n" +
            "3. Ver salario promedio\n" +
            "4. Salir");
        if (opcion === null)
            break;
        switch (opcion) {
            case "1":
                pedirDatosEmpleado();
                break;
            case "2":
                const nombreABuscar = prompt("Escribe el nombre del empleado a buscar:");
                if (nombreABuscar === null || nombreABuscar.trim() === "") {
                    alert("Nombre inválido.");
                    break;
                }
                const encontrados = buscarPorNombre(nombreABuscar);
                if (encontrados.length > 0) {
                    encontrados.forEach(emp => alert(`ID: ${emp.id}, Nombre: ${emp.nombre}, Salario: ${emp.salario}`));
                }
                break;
            case "3":
                try {
                    const promedio = calcularPromedioSalarios();
                    alert(`El salario promedio es: ${promedio.toFixed(2)}`);
                }
                catch (e) {
                    alert(e.message);
                }
                break;
            case "4":
                // Confirmar antes de salir
                const confirmarSalida = confirm("¿Seguro que quieres salir del sistema?");
                if (confirmarSalida) {
                    alert("¡Hasta luego! Gracias por usar el sistema.");
                    return;
                }
                break;
            default:
                alert("Esa opción no está, inténtalo otra vez.");
        }
    }
};
iniciarSistemaEmpleados();
