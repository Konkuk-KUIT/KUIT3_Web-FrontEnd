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
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data.todos; //Todos 인터페이스의 todos 배열을 반환
});
//페이지가 로드될 때 fetchTodos 함수를 호출하고, 그 결과를 renderTodo에 전달
document.onload = () => __awaiter(this, void 0, void 0, function* () {
    const todos = yield fetchTodos();
    renderTodo(todos);
});
//4주차 mission: typescript로 바꾸고, async와 await 사용하는 방법으로 바꾸기
//document onLoad eventListener : onLoad 될 때 fetchTodos를 실행해서 renderTodo에 넘기는 것 - 좋은 방식
const updateTodo = (todoId, originalTitle) => __awaiter(this, void 0, void 0, function* () {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    todoItem.innerHTML = "";
    // mission
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.value = originalTitle;
    inputTitle.className = "updateInput";
    todoItem.appendChild(inputTitle);
    inputTitle.focus();
    inputTitle.addEventListener("keypress", (event) => __awaiter(this, void 0, void 0, function* () {
        if (event.key == "Enter" && inputTitle.value.trim() !== "" && inputTitle.value !== originalTitle) {
            yield fetch(API_URL + "/" + todoId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: inputTitle.value }),
            });
            const newTodos = yield fetchTodos();
            renderTodo(newTodos);
        }
    }));
});
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
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toISOString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
        completed: false
    };
    yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    });
    todoInputEl.value = "";
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
});
