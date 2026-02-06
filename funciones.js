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

function mascotas(a,b,c){
    console.log("Nombres de las mascotas: ",  a + b + c )
}

mascotas('Puppy', 'Bombon', 'Milaneso')

// EJERCICIOS
console.log("-----Calcular Area de un Triangulo----")
// Funcion para calcular el area de un triangulo 
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log(areaTriangulo(10, 5)); // 25
console.log(areaTriangulo(7, 4));  // 14

// Lo mismo pero con arrow 
const calcularSuperficie = (b, h) => (b * h) / 2;
console.log(calcularSuperficie(12, 6)); // 36
console.log(calcularSuperficie(9, 4));  // 18

console.log("-----Verificar si es primo----")
// Funcion para verificar si un numero es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) { // Math.sqrt nos ayuda a llegar hasta la raiz cuadra del numero
        if (numero % i === 0) return false; // Operador modulo (si el residuo es 0 el numero SI se divide, entonces no es primo)
    }
    return true; // Si no encontro divisor, es true
}
console.log(esPrimo(7));  // true
console.log(esPrimo(12)); // false

//Lo mismo pero con arrow
const validarPrimo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {  // Empieza en 2 (primer divisor posible)
        if (n % i === 0) return false;
    }
    return true;
};
console.log(validarPrimo(11)); // true
console.log(validarPrimo(15)); // false

console.log("-----Generar Fibonacci----")
// Funcion para generar numeros fibonacci 
function fibonacci(n) { // Cuantos numeros quieres
    let serie = []; // Arreglo vacio

    if (n >= 1) serie.push(0);
    if (n >= 2) serie.push(1);

    for (let i = 2; i < n; i++) { // Empieza desde la posición 2 porque la 0 y 1 ya existen 
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return serie;
}
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]

// Lo mismo pero con arrow function 
const crearFibonacci = (cantidad) => {
    let lista = [];

    if (cantidad >= 1) lista.push(0);
    if (cantidad >= 2) lista.push(1);

    for (let i = 2; i < cantidad; i++) {
        lista.push(lista[i - 1] + lista[i - 2]); // suma los dos números anteriores y agrega el resultado al arreglo
    }

    return lista; // Devuelve la serie
};
console.log(crearFibonacci(6)); // [0, 1, 1, 2, 3, 5]
console.log(crearFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


