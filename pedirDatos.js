// Preguntar cuantos perros tienes 
// Preguntar cuantos gatos tienes 
// Mostrar como respuesta: Tienes en total x mascotas

let perros = prompt("Cuantos perros tienes...")
let gatos = prompt("Cuantos gatos tienes...")


// Convertir a numero
perros = parseInt(perros)
gatos = parseInt(gatos)

// ParseInt Mas tolerable, util cuando el usuario escribe texto

let totalMascotas = perros + gatos;

console.log("En total tienes " + totalMascotas + " mascotas." )

let hermanos = Number(prompt("Cuantos hermanos tienes..."))
let hermanas = Number(prompt("Cuantos hermanas tienes..."))

// Number es mas estricto y falla si hay texto mezclado
let totalH = hermanos + hermanas;

console.log("En total tienes " + totalH + " hermanos." )

// NaN - Not a Number