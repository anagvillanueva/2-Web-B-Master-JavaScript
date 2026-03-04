if (true){
    var nombre = 'Ana'; 
}

console.log(nombre); // var NO respeta el alcance de bloque

// var permite redeclarar y reasignar
var x = 1; 
var x = 'vaca'; 
var x = true;

if(true) {
    let apellido = 'Villanueva '; // Reference Error, porque let respecta el scope de bloque
}

//console.log(apellido);

let y = 10;

// NO permite redeclarar, ni reasignar 
const z = 20;

const usuario = {nombre: 'Fernanda', edad: 25};

// Mutando 
usuario.edad = 34;

console.log(usuario);

// Hoisting con var/undefined
console.log(mascota);
var mascota = 'Milaneso';
console.log(mascota);

// TDZ, no podemos acceder a una variable antes de que se inicialice
//console.log(ciudad);
let ciudad = 'CDMX';
console.log(ciudad);

//Funcion tradicional, this depende de como se llama la funcion
function sumar(a,b) {
    return a + b;
}

//Funcion de flecha, return explicito, this se hereda del contexto donde fue creado
const Sumar = (numero1, numero2) => {
    return numero1 + numero2;
}
// Arrow function en una sola linea 
const Sumar1 = (a, b) => a + b;

//Parametros sin ()
const duplicar = n => n * 2; 
console.log(duplicar(7));

// Retornando un objeto con return implicito
const crearUser = (nombre) => ({nombre: nombre, activo: true});
console.log(crearUser('Ana'));

let perro = 'Puppy';
let comida = 'Pollito';

// Concatenacion 
let frase1 = 'Hola soy' + perro + 'y me gusta el' + comida;
console.log(frase1);

// Template literal 
let frase2 = `Hola soy ${perro} y mi platillo favorito es el ${comida}`;
console.log(frase2);

const persona = {nom: 'Maeva', edad: 22, ciudad: 'CDMX'}
const {nom, edad} = persona;

console.log(nom);
console.log(edad);

const promesa = new Promise(function(resolve, reject){
    const exito = true; 

    if(exito){
        resolve('Todo salio bien');
    }else{
        reject('Algo salio mal')
    }
});

promesa.then(function(resultado){
    console.log(resultado);
});