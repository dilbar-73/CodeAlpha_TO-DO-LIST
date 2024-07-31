const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;

    // Add a class for styling and functionality
    todoItem.classList.add('todo-item');

    // Add click event listener to toggle 'completed' class
    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent li click event from firing
        todoItem.remove();
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}