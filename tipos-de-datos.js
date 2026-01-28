// Este es un comentario en JavaScript 

// Tipos de datos 

// Number: enteros y decimales
let edad = 24;
let precio = 199.99;

console.log("Tipo de dato Number:");
console.log(edad);
console.log(precio);
console.log(typeof edad); 
console.log(typeof precio);

// String (texto)
let nombre = "Ana";
let saludo = 'Hola mundo';
console.log("Tipo de dato String:");
console.log(nombre);
console.log(saludo);
console.log(typeof nombre);
console.log(typeof saludo);

// Boolean (verdadero y falso)
let esMayorDeEdad = true;
let tienePermiso = false;
console.log('Tipo de dato Boolean:');
console.log(esMayorDeEdad);
console.log(tienePermiso);
console.log(typeof esMayorDeEdad);

// Undefined (variable declarada sin valor)
let telefono;
console.log("Tipo de dato Undefined:");
console.log(telefono);
console.log(typeof telefono);

// Null (valor intencionalmente vacio)
console.log("Tipo de dato Null:");
let direccion = null;
console.log(direccion);
console.log(typeof direccion);
// Sale object porque es un error historico que no se corriguio.

// Object (estructura de datos con propiedades)
let persona = {
    nombre: 'Diego',
    edad: '22',
    ciudad: 'CDMX'
};
console.log("Tipo de dato Object:");
console.log(typeof persona);
console.log(persona);

// Symbol (identificador unico )
let id = Symbol('id');
console.log("Tipo de dato Symbol:");
console.log(id);
console.log(typeof id);

/* Se pone ; al final de cada linea de codigo
por buenas practicas y evitar errores */

let a = 'Pera'; 
let fruta = 'Mango'; // Usar nombres descriptivos para las variables 
