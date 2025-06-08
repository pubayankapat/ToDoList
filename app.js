const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUl = document.getElementsById('todo-list');

let alTodos = [];

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('test');

})

function addTodo() {
    const todoText = todoInput.vlue.trim();
    if (todoText.length > 0) {
        allTodos.push(todoText);
        createtodItem(todoText);
        todoInput.value = "";
    }
}
function updateTodoList() {
    todolist.innerHTML = "";
    allatodos.foreach((todo, todoIndex) => {
        todoItem = ccreateTodoItem(todo, todoIndex);
        todoList.append(todoItem);
    })

}

function createtodoItem(todo,todoIndex) {
    const todoLi = document.createElement("li");
    todoLi.innertext = todo;
    todoListUl.append(todoLi);
    return todoLi;
}