/*
localStorage: Nos va permitir guardar datos del usuario
NO se van a borrar al cerrar la pestana o el navegador 
Funciona por dominio

## SOLO guarda STRINGS (texto) ##
Si queremos guardar objetos/arrays debemos convertir a JSON 
localStorage.setItem("usuario", JSON.stringify(objeto))

API Web Storage de JavaScript


clave --> valor 

nombre --> Ana 
idioma --> espanol

GUARDAR DATOS
localStorage.setItem("clave", "valor");

OBTENER DATOS 
localStorage.getItem("clave");
Si no existe va devolver NULL

ELIMINAR DATOS 
localStorage.removeItem("clave");

BORRAR TODO EL ALMACENAMIENTO 
localStorage.clear();


Cuando NO debenmos de usarlo:
- Datos sensibles como contrasenas 
- Informacion muy grande 
- Seguridad critica

localStorage
sessionStorage 
cookies
*/


// Seleccionar nuestros elementos del DOM 

let txt = document.getElementById('texto');
let fechaP = document.getElementById('fecha');
let btnGuardar = document.getElementById('guardar');
let btnBorrar = document.getElementById('borrar');

// Declarar las claves donde se van a guardar en localStorage 

const CLAVE_TEXTO = 'diario_texto';
const CLAVE_FECHA = 'diario_fecha'

// Funcion para obtener la fecha del dia de hoy 

function fechaSoloDia(){
    let hoy = new Date();  // Creamos un objeto con la fecha actual 
    return hoy.toLocaleDateString('es-MX') 
}

function cargar(){
    let textoGuardado = localStorage.getItem(CLAVE_TEXTO)
    let fechaGuardada = localStorage.getItem(CLAVE_FECHA)

    if(textoGuardado){
        txt.value = textoGuardado;
    }

    if(fechaGuardada){
        fechaP.textContent = 'Guardado el:' + fechaGuardada;
    }else {
        fechaP.textContent = '';
    }
}

// Para darle click en Guardar 
btnGuardar.onclick = () => {
    let texto = txt.value.trim(); // Para quitar espacios 

    if(!texto) return; 

    let hoy = fechaSoloDia(); // Funcion que creamos para obtener el dia

    // Guardado como string 
    localStorage.setItem(CLAVE_TEXTO, texto)
    localStorage.setItem(CLAVE_FECHA, hoy)

    fechaP.textContent = 'Guardado el: ' + hoy;
};

// Para darle click en Eliminar 
btnBorrar.onclick = () => {
    localStorage.removeItem(CLAVE_TEXTO)
    localStorage.removeItem(CLAVE_FECHA)

    txt.value = '';
    fechaP.textContent = '';
};

cargar(); // Llamar a la funcion cargar al inicio para mostrar lo que ya estaba guardado