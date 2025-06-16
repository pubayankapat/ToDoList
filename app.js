// Select DOM elements
const form = document.querySelector('form');
const input = document.getElementById('todo-input');
const todoList = document.querySelector('.todo-list');

// Prevent form from submitting on Enter
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

// Add button functionality
document.getElementById('add-button').addEventListener('click', (e) => {
    e.preventDefault();
    addTodo();
});

// Function to create and append a new todo item
function addTodo() {
    const text = input.value.trim();
    if (text === '') return;

    const id = `todo-${Math.random().toString(36).substr(2, 9)}`;

    const li = document.createElement('li');
    li.classList.add('todo');

    li.innerHTML = `
        <input type="checkbox" id="${id}">
        <label for="${id}" class="customcheckbox">
            <img src="images/checked.png" alt="">
        </label>
        <label for="${id}" class="todo-text">${text}</label>
        <button class="delete-button">
            <img src="images/icons8-delete-30.png" alt="">
        </button>
    `;

    // Add delete functionality
    li.querySelector('.delete-button').addEventListener('click', () => {
        li.remove();
    });

    // Add completed styling toggle (optional)
    li.querySelector(`#${id}`).addEventListener('change', (e) => {
        li.classList.toggle('completed', e.target.checked);
    });

    todoList.appendChild(li);
    input.value = '';
}
