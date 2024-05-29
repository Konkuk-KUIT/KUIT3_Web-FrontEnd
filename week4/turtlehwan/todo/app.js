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
const API_URL = "http://localhost:8080/todos";
// interface Todos {
//   todos: Todo[];
// }
const fetchTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
}), false);
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    // mission [implement update todo]
    const inputContent = document.createElement("input");
    inputContent.value = originalTitle;
    inputContent.className = "updateInput";
    //add event listener
    const fetchUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            body: JSON.stringify({ title: inputContent.value }),
        });
        const newTodos = yield fetchTodos();
        renderTodo(newTodos);
    });
    const enterKeyEvent = (e) => {
        if (e.key === "Enter") {
            fetchUpdate();
        }
    };
    inputContent.addEventListener("keyup", enterKeyEvent);
    const outsideClickEvent = (e) => {
        if (!e.target)
            return;
        if (inputContent.contains(e.target) || e.target.className === "updateBtn") {
            console.log("clicked inside");
        }
        else {
            console.log("clicked outside");
            fetchUpdate();
            //document.body.removeEventListener("click", outsideClickEvent);
        }
    };
    document.body.addEventListener("click", outsideClickEvent);
    //remove origin title & insert input
    if (!todoItem)
        return;
    todoItem.removeChild(todoItem.childNodes[0]);
    todoItem.insertBefore(inputContent, todoItem.firstChild);
};
const renderTodo = (newTodos) => {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.className = "updateBtn";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!todoInputEl)
        return;
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
    yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    });
    todoInputEl.value = "";
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
});
const deleteTodo = (todoId) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
});
