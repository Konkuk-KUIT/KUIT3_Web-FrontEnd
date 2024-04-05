const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    // mission
    const newTitle = document.createElement("new");
    newTitle.value = originalTitle;
    newTitle.className = "updateNew";

    if (!newTitle || newTitle === originalTitle) return;

    fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle.value }), 
    })
        .then(() => fetch(API_URL)) 
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};

const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;

        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);

        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);

        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl); 
    });
};

const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();

    if (!title) return;

    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newTodo, completed: false}),
    })
        .then((response) => response.json())
        .then(() => {
            todoInputEl.value = "";
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
