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
