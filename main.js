//Seleccionados nuestros elementos del DOM mediante ID 

const titulo = document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementById("texto");
console.log(texto);

const caja = document.getElementById("caja");
console.log(caja)

const btnClase = document.getElementById("btnClase")
const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnOcultar = document.getElementById("btnOcultar");


// El evento addEventListener esta escuchando ... que haga click 

// Cambiar texto 
btnTexto.addEventListener("click", () =>{
    titulo.textContent = 'Cambiaste el texto desde Javascript'
});

// Cambiar colores
btnColor.addEventListener("click", () =>{
    titulo.style.color = 'purple';
    caja.style.backgroundColor = 'pink';
});

//Para ocultar mi caja 
btnOcultar.addEventListener("click", () => {
    if(caja.style.display === "none"){
        caja.style.display = "block";
    }else{
        caja.style.display = 'none';
    }
});

// Cambiar de clase CSS
btnClase.addEventListener("click", () => {
    caja.classList.toggle("activa"); // Cambia el estado visual 
});