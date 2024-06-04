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
const API_URL = "http://localhost:3001/todos";
// fetchTodos 함수를 async 함수로 변경
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    renderTodo(data);
});
fetchTodos();
const updateTodo = (todoId, originalTitle) => __awaiter(this, void 0, void 0, function* () {
    const newTitle = prompt("수정사항을 입력하세요:", originalTitle); //입력받기
    if (!newTitle || newTitle === originalTitle) {
        return; // 취소 또는 변경사항이 없을 경우
    }
    yield fetch(`${API_URL}/${todoId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, completed: false }),
    });
    yield fetchTodos();
});
const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.id = `todo-${todo.id}`;
        const textSpan = document.createElement("span");
        textSpan.textContent = todo.title;
        textSpan.className = "text";
        textSpan.onclick = () => {
            updateTodo(todo.id, todo.title);
        };
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.className = "updateBtn";
        updateEl.onclick = () => {
            updateTodo(todo.id, todo.title);
        };
        listEl.append(textSpan, deleteEl, updateEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
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
    yield fetchTodos();
});
todoInputEl.addEventListener('keydown', (event) => __awaiter(this, void 0, void 0, function* () {
    if (event.key === "Enter") {
        yield addTodo();
        event.preventDefault();
    }
}));
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(`${API_URL}/${todoId}`, {
        method: "DELETE",
    });
    yield fetchTodos();
});
