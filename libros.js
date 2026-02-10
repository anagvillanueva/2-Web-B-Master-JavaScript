// Array para guardar los libros leídos
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
librosLeidos.push(titulo);
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
    console.log(`- ${librosLeidos[i]}`);
    }
}

agregarLibro("1984");
agregarLibro("El principito");
agregarLibro("Cien años de soledad");

mostrarLibrosLeidos();
