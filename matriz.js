// 1) Seleccionamos elementos del DOM (inputs, botón y mensaje)
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const msg = document.getElementById("msg");

// 2) Seleccionamos las 4 listas por separado (una por cuadrante)
const urgentList = document.getElementById("list-urgent");
const importantList = document.getElementById("list-important");
const laterList = document.getElementById("list-later");
const nextList = document.getElementById("list-next");

/**
 * Crea un <li> con:
 * - Un <span> con el texto de la tarea
 * - Un botón "Eliminar" para borrar SOLO ese <li>
 */
function createTaskItem(text) {
    const li = document.createElement("li");
    li.classList.add("item");

    // Texto seguro (evita innerHTML)
    const span = document.createElement("span");
    span.textContent = text;

    // Botón eliminar
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.classList.add("btn", "delete");
    delBtn.textContent = "Eliminar";

    // Evento: eliminar el elemento de la lista
    delBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    return li;
}

/**
 * Valida el input y agrega la tarea a la lista correcta
 * según la categoría seleccionada.
 */
function addTask() {
    // Limpia mensaje anterior
    msg.textContent = "";

    // Tomamos el texto y quitamos espacios al inicio/fin
    const text = taskInput.value.trim();

    // Validación: no permitir tareas vacías
    if (text === "") {
        msg.textContent = "Escribe una actividad antes de agregar.";
        taskInput.focus();
        return;
    }

    // Obtenemos la categoría elegida
    const category = categorySelect.value;

    // 3) Elegimos la lista objetivo con IF
    let targetList;

    if (category === "urgent") {
        targetList = urgentList;
    } else if (category === "important") {
        targetList = importantList;
    } else if (category === "later") {
        targetList = laterList;
    } else {
        // Si no es ninguna de las anteriores, asumimos "next"
        targetList = nextList;
    }

    // Creamos el item y lo insertamos en la lista seleccionada
    const taskItem = createTaskItem(text);
    targetList.appendChild(taskItem);

    // Limpiamos el input para capturar otra tarea
    taskInput.value = "";
    taskInput.focus();
}

// 4) Evento principal: click en "Agregar"
addBtn.addEventListener("click", addTask);

// 5) Extra: presionar Enter en el input también agrega
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

