// создание блока ввода задания
function createTodoItem(title) {

    //li
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // input[checkbox]
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    // label
    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    // input[text]
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    // Button edit
    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.className = 'edit';

    // Button delete
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.className = 'delete';

    // оборачивваем в li все элементы
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // срабатывает функция событий
    bindEvents(listItem);

    return listItem;
}

// создаём функцию событий
function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('.button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

// проверяем на пустоту ввода задания
function addTodoItem(event) {
    event.preventDefault();

    if (addInput.value === '') return alert('Введите задачу');

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

// функция события ckeckbox
function toggleTodoItem(event) {
    console.log(event.target);
    console.log(this);
}

// функция события кнопки "изменить"
function editTodoItem(event) {
    console.log(event.target);
    console.log(this);
}

// функция события кнопки "удалить"
function deleteTodoItem(event) {
    console.log(event.target);
    console.log(this);
}

// константы
const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

//событие отправки формы
todoForm.addEventListener('submit', addTodoItem);