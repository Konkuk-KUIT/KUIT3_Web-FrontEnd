"use strict";
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
todoInputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
const fetchAndRenderingWithFiltering = (complete = false) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    let filteredTodos = data.filter((todo) => !todo.completed);
    if (complete) {
        const filteredTodos = data.filter((todo) => todo.completed);
    }
    renderTodo(filteredTodos);
});
window.onload = () => {
    fetchAndRenderingWithFiltering(true);
};
const API_URL = "http://localhost:8080/todos";
//json-server --watch db.json --port 8080
const renderTodo = (newTodos) => {
    // if (!newTodos) return;
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const iconContainerEl = document.createElement("div");
        iconContainerEl.className = "icon-container";
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.className = "updateBtn";
        udpateEl.onclick = () => updateTodo(todo.id, todo.title);
        const completeEl = document.createElement("span");
        completeEl.textContent = "✔️";
        completeEl.className = "completeBtn";
        completeEl.onclick = () => {
            window.alert(`${todo.title}` + " 을 완료하였습니다.");
            completeTodo(todo.id);
        };
        iconContainerEl.append(udpateEl);
        iconContainerEl.append(completeEl);
        iconContainerEl.append(deleteEl);
        listEl.append(iconContainerEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toLocaleString();
    if (!title)
        return;
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
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    })
        .then((response) => response.json())
        .then(() => {
        todoInputEl.value = "";
        return fetchAndRenderingWithFiltering(); //local db의 내용이 변경되었기 때문에, 다시 fetch
    })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
const deleteTodo = (todoId) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    }).then(() => fetchAndRenderingWithFiltering());
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    todoItem.innerHTML = "";
    const updateContainer = document.createElement("div");
    updateContainer.className = "update-container";
    const updateInputEl = document.createElement("input");
    updateInputEl.value = originalTitle;
    updateInputEl.id = "todoInput";
    updateInputEl.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            updateTodoTitle(todoId, updateInputEl.value);
        }
    });
    const updateBtn = document.createElement("span");
    updateBtn.textContent = "✔️";
    updateBtn.className = "updateBtn";
    updateBtn.onclick = () => {
        updateTodoTitle(todoId, updateInputEl.value);
    };
    updateContainer.append(updateInputEl);
    updateContainer.append(updateBtn);
    todoItem.append(updateContainer);
    updateInputEl.focus();
};
const updateTodoTitle = (todoId, newTitle) => {
    const date = new Date();
    const updatedAt = date.toLocaleString();
    fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, updatedAt }),
    })
        .then((response) => response.json())
        .then(() => {
        todoInputEl.value = "";
        return fetchAndRenderingWithFiltering();
    });
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};
const completeTodo = (todoId) => {
    const date = new Date();
    const updatedAt = date.toLocaleString();
    fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true, updatedAt }),
    })
        .then((response) => response.json())
        .then(() => fetchAndRenderingWithFiltering());
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};
