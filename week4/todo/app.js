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
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
const updateTodo = (todoId, todoTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
    todoItem.innerHTML = "";
    // input 엘리먼트
    const inputElement = document.createElement("input");
    inputElement.id = "updateElInput";
    inputElement.value = todoTitle;
    todoItem.append(inputElement);
    // update 버튼
    const updateBtn = document.createElement("span");
    updateBtn.textContent = "✅";
    todoItem.appendChild(updateBtn);
    // 업데이트 버튼=>이벤트 핸들러
    updateBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        const newTitle = inputElement.value;
        if (!newTitle)
            return;
        const updatedTodo = {
            id: todoId,
            title: newTitle,
            createdAt: new Date().toDateString(),
            completed: false,
        };
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        })
            .then((response) => response.json())
            .then((data) => renderTodo(data));
    }));
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
