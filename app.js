const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.querySelector(".todo-list");

// Fetch todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Load existing todos
window.onload = () => {
    todos.forEach(todo => renderTodo(todo));
};

// Handle form submission
addButton.addEventListener("click", function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    const todo = {
        id: Date.now().toString(),
        text: text
    };

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodo(todo);
    input.value = "";
});

// Render a todo item in the list
function renderTodo(todo) {
    const li = document.createElement("li");
    li.className = "todo";
    li.setAttribute("data-id", todo.id);

    li.innerHTML = `
        <input type="checkbox" id="todo-${todo.id}">
        <label for="todo-${todo.id}" class="customcheckbox">
            <img src="images/checked.png" alt="">
        </label>
        <label for="todo-${todo.id}" class="todo-text">
            ${todo.text}
        </label>
        <button class="delete-button"><img src="images/icons8-delete-30.png" alt=""></button>
    `;

    // Delete button handler
    li.querySelector(".delete-button").addEventListener("click", () => {
        li.remove();
        todos = todos.filter(t => t.id !== todo.id);
        localStorage.setItem("todos", JSON.stringify(todos));
    });

    todoList.appendChild(li);
}
