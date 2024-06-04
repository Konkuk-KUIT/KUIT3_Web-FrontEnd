var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:3000/todos";
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return { todos: data };
});
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    todoItem.innerHTML = "";
    const inputEl = document.createElement("input");
    inputEl.value = originalTitle;
    todoItem.append(inputEl);
    inputEl.focus();
    inputEl.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            const newTitle = inputEl.value;
            fetch(API_URL + "/" + todoId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: newTitle }),
            })
                .then(() => fetch(API_URL))
                .then((response) => response.json())
                .then((data) => renderTodo(data));
        }
    });
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
        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = () => updateTodo(todo.id, todo.title);
        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime().toString(),
        title,
        createdAt,
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    })
        .then((response) => response.json())
        .then(() => {
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos.todos);
});
