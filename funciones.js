function saludar(nombre){ //Nombre es un parametro
    //Lo que va hacer mi funcion
    return 'Hola ' + nombre; // Retornando el resultado
}

saludar('Ana'); // Llamando a mi funcion Saludar

let saludo = saludar('Fatima');

console.log(saludar('Ana'));
console.log(saludo);

function sumar(a,b){
    console.log(a + b); // Resultado en consola SOLO imprime
}
sumar(2,3);


// return entrega un valor para usarlo despues
function restar(num1, num2){
    let resultado = num1 - num2;
    return resultado; // Esta variable es local 
}

console.log(restar(10,7));

let resultado; // Variable global 
console.log(resultado); // Undefined


function sinReturn(){
    let x = 5;
}
// Logra ejecutar la funcion pero NO regresa nada
console.log(sinReturn()) // undefined


function multiplicar(dato1, dato2){
    return dato1 * dato2;
}

console.log(multiplicar(4)) // Not A Number, hace falta pasarle un argumento

// console.log(Ana) // Error de variable no definida

// Arrow function - Funcion de flecha 

const dividir = (a, b) => a/b; // return automatico

console.log(dividir(15,2));

const suma = (a,b) => { // Una funcion mas larga con {} no tiene return automatico
    return a + b;  
}

console.log(suma(3,4));

const multi = (a,b) => { return a * b}

console.log(multi(10, 5));

// Funcion anonima (no necesitas darle nombre, ejecuta algo puntual)
// Callbacks
setTimeout(function (){
    console.log("Esto se ejecuta despues...")
}, 5000);

// CUANDO NO UTILIZAR FUNCIONES ANONIMAS 
/*Se tiene que reutilizar muchas veces 
Tiene logica grande
Necesita ser testeada
Se necesita claridad */