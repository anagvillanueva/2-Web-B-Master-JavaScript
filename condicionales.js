let edad = 20;
let tieneINE = true;

//Condicion que queremos que se cumpla
if (edad >= 18){
    console.log("Eres mayor de edad"); // Se ejecuta si es true
}else {
    console.log("Eres menor de edad"); // Se ejecuta si es false
}

let calificacion = 4; 

if (calificacion >= 9){
    console.log("Eres increible")
} else if (calificacion >= 6){
    console.log("Pansaste ...")
}else{
    console.log("Reprobado:(")
}

// AND (y) &&
// OR (o) || 
// NOT (negacion) !

if (edad >= 18 && tieneINE){
    console.log("Puedes votar")
}else {
    console.log("No puedes votar")
}

let numero = prompt('Ingresa un numero:');

numero = parseInt(numero);

// Si queremos preguntar si es divisible o no entre 2 
if (numero % 2 === 0){
    console.log('Es divisible entre 2')
}else {
    console.log('No es divisible entre 2')
}

console.log()
5
let esPremium = true;
let totalCompra = 350;
let esFinDeSemana = false;

if (esPremium || (totalCompra > 1000 && esFinDeSemana )){
    console.log('Descuento aplicado')
} else {
    console.log('No aplica el descuento')
}