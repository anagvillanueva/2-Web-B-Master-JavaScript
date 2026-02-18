//Buscamos los elementos en el DOM

const form = document.getElementById("formComentario");
const textarea = document.getElementById("comentario");
const lista = document.getElementById("listaComentarios");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página

    const texto = textarea.value;

    // Crear contenedor del comentario
    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");

    // Crear párrafo del texto
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;

    // Fecha y hora
    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    fecha.textContent = new Date().toLocaleString();

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    btnEliminar.addEventListener("click", () => {
        divComentario.remove();
});

    // Armar comentario
    divComentario.appendChild(pTexto);
    divComentario.appendChild(fecha);
    divComentario.appendChild(btnEliminar);

    // Agregar a la lista
    lista.appendChild(divComentario);

    // Limpiar textarea
    textarea.value = "";
});
