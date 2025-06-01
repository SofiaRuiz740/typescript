"use strict";
//Gestión de una Biblioteca
const biblioteca = [];
const cerrarPorErrores = () => {
    throw new Error("Demasiados intentos inválidos. Cerrando la biblioteca.");
};
const agregarLibro = () => {
    const titulo = prompt("Ingresa el título del libro:");
    const autor = prompt("Ingresa el autor:");
    const fechaTexto = prompt("Ingresa el año de publicación:");
    if (!titulo || !autor || !fechaTexto || isNaN(Number(fechaTexto))) {
        alert("Algún dato está mal. No se guardó el libro.");
        return;
    }
    const nuevoLibro = {
        titulo,
        autor,
        fecha: Number(fechaTexto),
    };
    biblioteca.push(nuevoLibro);
    alert(`Libro "${titulo}" agregado exitosamente.`);
};
const buscarLibro = () => {
    const tituloBuscado = prompt("Escribe el título a buscar:");
    if (!tituloBuscado) {
        alert("No escribiste nada.");
        return;
    }
    const libroEncontrado = biblioteca.find((libro) => libro.titulo.toLowerCase() === tituloBuscado.toLowerCase());
    libroEncontrado
        ? alert(`Libro encontrado:\nTítulo: ${libroEncontrado.titulo}\nAutor: ${libroEncontrado.autor}\nAño: ${libroEncontrado.fecha}`)
        : alert("No encontramos ese libro.");
};
const mostrarLibros = () => {
    if (biblioteca.length === 0) {
        alert("La biblioteca está vacía.");
        return;
    }
    let mensaje = "Libros en la biblioteca:\n";
    biblioteca.forEach((libro, i) => {
        mensaje += `${i + 1}. "${libro.titulo}" de ${libro.autor} (${libro.fecha})\n`;
    });
    alert(mensaje);
};
const iniciarBiblioteca = () => {
    let erroresSeguidos = 0;
    while (true) {
        const opcion = prompt("Menú Biblioteca:\n1. Agregar libro\n2. Buscar libro\n3. Ver todos\n4. Salir");
        switch (opcion) {
            case "1":
                agregarLibro();
                erroresSeguidos = 0;
                break;
            case "2":
                buscarLibro();
                erroresSeguidos = 0;
                break;
            case "3":
                mostrarLibros();
                erroresSeguidos = 0;
                break;
            case "4":
                const salir = confirm("¿Seguro que quieres salir?");
                if (salir) {
                    alert("¡Hasta la próxima!");
                    return;
                }
                break;
            default:
                alert("Opción inválida. Intenta con 1, 2, 3 o 4.");
                erroresSeguidos++;
                if (erroresSeguidos >= 3) {
                    cerrarPorErrores(); // tipo never
                }
        }
    }
};
iniciarBiblioteca();
