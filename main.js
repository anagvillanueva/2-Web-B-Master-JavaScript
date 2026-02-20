/*
localStorage: Nos va permitir guardar datos del usuario
NO se van a borrar al cerrar la pestana o el navegador 
Funciona por dominio

## SOLO guarda STRINGS (texto) ##
Si queremos guardar objetos/arrays debemos convertir a JSON 
localStorage.setItem("usuario", JSON.stringify(objeto))

API Web Storage de JavaScript
*/

// Seleccionar nuestros elementos del DOM 
const txt = document.getElementById('texto');
const btnGuardar = document.getElementById('guardar');
const btnCancelar = document.getElementById('cancelar');
const pensamientosList = document.getElementById('pensamientos-list');
const sinPensamientos = document.getElementById('sin-pensamientos');

// Declarar la clave donde se van a guardar en localStorage 
const CLAVE_PENSAMIENTOS = 'diario_pensamientos';

// Variable para controlar si estamos editando
let editandoId = null;

// Función para obtener la fecha actual
function fechaSoloDia() {
    let hoy = new Date();
    return hoy.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Función para obtener todos los pensamientos del localStorage
function obtenerPensamientos() {
    const datos = localStorage.getItem(CLAVE_PENSAMIENTOS);
    return datos ? JSON.parse(datos) : [];
    // Operador ternario: Si datos existe, lo parseamos, si no, devolvemos un array vacío
}

// Función para guardar pensamientos en localStorage
function guardarEnLocalStorage(pensamientos) {
    localStorage.setItem(CLAVE_PENSAMIENTOS, JSON.stringify(pensamientos));
}

// Función para generar un ID único
function generarId() {
    return Date.now().toString();
}

// Función para renderizar las tarjetas
function renderizarPensamientos() {
    const pensamientos = obtenerPensamientos();
    pensamientosList.innerHTML = '';

    if (pensamientos.length === 0) {
        sinPensamientos.style.display = 'block';
        return;
    }

    sinPensamientos.style.display = 'none';

    // Mostrar los pensamientos en orden inverso (más recientes primero)
    pensamientos.reverse().forEach(pensamiento => {
        const card = document.createElement('div');
        card.className = 'pensamiento-card';
        card.innerHTML = `
            <div class="pensamiento-fecha">${pensamiento.fecha}</div>
            <div class="pensamiento-texto">${pensamiento.texto}</div>
            <div class="pensamiento-acciones">
                <button class="btn-editar" onclick="editarPensamiento('${pensamiento.id}')">Editar</button>
                <button class="btn-eliminar" onclick="eliminarPensamiento('${pensamiento.id}')">Eliminar</button>
            </div>
        `;
        pensamientosList.appendChild(card);
    });
}

// Función para guardar un nuevo pensamiento
function guardarPensamiento() {
    const texto = txt.value.trim();

    if (!texto) {
        alert('Por favor escribe algo antes de guardar');
        return;
    }

    const pensamientos = obtenerPensamientos();
    const fecha = fechaSoloDia();

    if (editandoId) {
        // Editar pensamiento existente
        const indice = pensamientos.findIndex(p => p.id === editandoId);
        if (indice !== -1) {
            pensamientos[indice].texto = texto;
            pensamientos[indice].fecha = 'Editado: ' + fecha;
        }
        editandoId = null;
        btnCancelar.style.display = 'none';
        btnGuardar.textContent = 'Guardar Pensamiento';
    } else {
        // Crear nuevo pensamiento
        const nuevoPensamiento = {
            id: generarId(),
            texto: texto,
            fecha: fecha
        };
        pensamientos.push(nuevoPensamiento);
    }

    guardarEnLocalStorage(pensamientos);
    txt.value = '';
    renderizarPensamientos();
}

// Función para editar un pensamiento
window.editarPensamiento = function(id) {
    const pensamientos = obtenerPensamientos();
    const pensamiento = pensamientos.find(p => p.id === id);

    if (pensamiento) {
        txt.value = pensamiento.texto;
        editandoId = id;
        btnCancelar.style.display = 'inline-block';
        btnGuardar.textContent = 'Guardar Cambios';
        txt.focus();
    }
};

// Función para cancelar edición
function cancelarEdicion() {
    txt.value = '';
    editandoId = null;
    btnCancelar.style.display = 'none';
    btnGuardar.textContent = 'Guardar Pensamiento';
}

// Función para eliminar un pensamiento
window.eliminarPensamiento = function(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este pensamiento?')) {
        let pensamientos = obtenerPensamientos();
        pensamientos = pensamientos.filter(p => p.id !== id);
        guardarEnLocalStorage(pensamientos);
        
        // Si estábamos editando este pensamiento, cancelar la edición
        if (editandoId === id) {
            cancelarEdicion();
        }
        
        renderizarPensamientos();
    }
};

// Event listeners
btnGuardar.addEventListener('click', guardarPensamiento);
btnCancelar.addEventListener('click', cancelarEdicion);

// Permitir guardar con Enter
txt.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        guardarPensamiento();
    }
});

// Cargar los pensamientos al iniciar
renderizarPensamientos();