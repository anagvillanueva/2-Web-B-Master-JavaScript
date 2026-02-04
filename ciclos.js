// Repite mientras la condicion sea true 

let i = 1;

while (i <= 10 ){
    console.log("while:", i);
    i++; // i = i + 1; VARIABLE DE CONTROL 
}

console.log('--------------------');

//Arrays 
let frutas = ['Manzana', 'Pera', 'Lulo', 'Cereza', 'Mango', 'Papaya'];

console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[0])

console.log(frutas.length)

for (let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta = ", frutas[indice])
}

console.log('Metodos de los arreglos')
let alumnos = []; // declarando un arreglo vacio

// Metodo push, agrega al final
alumnos.push("Ana");
alumnos.push("Bruno");
alumnos.push("Fernanda");
alumnos.push("Natalia");
console.log(alumnos);
// Metodo pop quita el ultimo
alumnos.pop();
console.log(alumnos);

//Metodo unshift agrega al principio
alumnos.unshift("Nina");
alumnos.unshift("Misael");
alumnos.unshift("Beto");

console.log(alumnos);
// Metodo shift quita al principio 
alumnos.shift();
console.log(alumnos);

