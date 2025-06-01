//Sistema de Gestión de Estudiantes

type Estudiante = {
  readonly nombre: string;
  readonly notas: number[];
};

const estudiantes: Estudiante[] = [];

const agregarEstudiante = (): void => {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  if (!nombre) {
    alert("Nombre inválido.");
    return;
  }

  const cantidadNotas = parseInt(prompt("¿Cuántas notas ingresará?") || "0");
  const notas: number[] = [];

  let i = 0;
  while (i < cantidadNotas) {
    const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`) || "0");
    if (nota >= 0 && nota <= 5) {
      notas.push(nota);
      i++;
    } else {
      alert("La nota debe estar entre 0 y 5");
    }
  }

  const nuevo: Estudiante = {
    nombre,
    notas
  } as const;

  estudiantes.push(nuevo);
  alert("Estudiante agregado correctamente.");
};

const buscarEstudiante = (): void => {
  const nombre = prompt("Ingrese el nombre del estudiante a buscar:");
  const resultado = estudiantes.find(e => e.nombre.toLowerCase() === (nombre || "").toLowerCase());
  resultado
    ? alert(`Notas de ${resultado.nombre}: ${resultado.notas.join(", ")}`)
    : alert("Estudiante no encontrado.");
};

const calcularPromedioGeneral = (): void => {
  let suma = 0;
  let totalNotas = 0;
  estudiantes.forEach(e => {
    e.notas.forEach(n => {
      suma += n;
      totalNotas++;
    });
  });

  const promedio = totalNotas > 0 ? suma / totalNotas : 0;
  alert(`Promedio general de todos los estudiantes: ${promedio.toFixed(2)}`);
};

const opcionInvalida = (): never => {
  throw new Error("Opción no válida.");
};

// Tipo `any` usado aquí para representar la entrada que puede ser de cualquier tipo.
const ejecutarPrograma = (): void => {
  let continuar: any = true;

  while (continuar) {
    const opcion = prompt(
      "Sistema de Gestión de Estudiantes:\n1. Agregar estudiante\n2. Buscar estudiante\n3. Calcular promedio general\n4. Salir"
    );

    switch (opcion) {
      case "1":
        agregarEstudiante();
        break;
      case "2":
        buscarEstudiante();
        break;
      case "3":
        calcularPromedioGeneral();
        break;
      case "4":
        alert("Programa finalizado.");
        continuar = false;
        break;
      default:
        try {
          opcionInvalida(); // Uso de never
        } catch (error: any) {
          alert(error.message);
        }
    }
  }
};

ejecutarPrograma();
