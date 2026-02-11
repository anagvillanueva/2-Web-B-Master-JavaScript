// Un objeto es una coleccion de pares clave - valor (propiedades)

const disco = {
    // Propiedades (datos del disco) atributos del objeto
    titulo: 'Debi Tirar Mas Fotos',
    artista: 'Bad Bunny',
    anio: 2025,
    disponible: true,

    //Propiedad de tipo arreglo
    canciones: ['Nuevayol', 'Perfumito Nuevo', 'Velda', 'La Mudanza', 'DTMF'],

    //Podemos guardar ACCIONES relacionadas con los datos
    //Metodo que muestra la informacion
    mostrarInfo() {
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`);
        // this apunta a ESTE objeto (disco)
    },

    //Metodo que liste las canciones 
    mostrarCanciones(){
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1}-${cancion}`);
        }
    )},

    //Agregar una cancion 
    agregarCancion(nombre){
        this.canciones.push(nombre);
        console.log(`Cancion agregada: ${nombre}`)
    }

    //Ejercicio:
    //Eliminar cancion 
    // Cambiar estado de disco a NO disponible
}

//Acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

//Acceder a los datos con notacion de corchetes
console.log(disco['titulo']);
console.log(disco['disponible']);

//Llamar a nuestro metodo
disco.mostrarInfo();
disco.mostrarCanciones();
disco.agregarCancion('Close Friends');
disco.mostrarCanciones();

//Desestructurar es SACAR cosas de un objeto SIN necesidad de escribir objeto.propiedad

const { canciones } = disco;
const [primera, segunda, tercera] = canciones;
// Saca el arreglo y luego saca los elementos del arreglo

console.log(primera);
console.log(segunda);
console.log(tercera);
console.log('-------------')

const { canciones: [pista1, pista2, pista3 ]} = disco; // Una sola linea (forma directa)
console.log(pista1);
console.log(pista2);
console.log(pista3);

// Error comun: Desestructurar NO crea datos, solo los extrae

// Renombrar variables 
const { titulo: nombreDisco, anio: lanzamiento } = disco;
// Se asigna el valor de la propiedad a una variable con otro nombre
console.log(nombreDisco);
console.log(lanzamiento);

//Desestructuracion basica
const {titulo, artista} = disco;

console.log(titulo);
console.log(artista);