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
    return data;
});
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
// document onLoad eventListener
const updateTodo = (todoId, originalTitle) => {
    var _a;
    const todoItem = document.querySelector(`#todo-${todoId}`);
    // mission
    if (todoItem !== null) {
        const editEl = document.createElement("input");
        const firstChild = todoItem.firstChild;
        // firstChild가 Text 노드인 경우에만 처리
        if (firstChild instanceof Text) {
            editEl.value = ((_a = firstChild.textContent) !== null && _a !== void 0 ? _a : ""); // 널 병합 연산자
            firstChild.textContent = "";
            // 이벤트 리스너 추가
            editEl.addEventListener("keyup", (event) => __awaiter(this, void 0, void 0, function* () {
                if (event.key === "Enter") {
                    const inputValue = editEl.value;
                    console.log(inputValue);
                    if (editEl.value == "") {
                        deleteTodo(todoId);
                    }
                    else {
                        editEl.remove();
                        if (todoItem.firstChild !== null)
                            todoItem.firstChild.textContent = inputValue;
                    }
                    //서버 데이터에 반영하는 부분 추가
                    yield fetch(API_URL + "/" + todoId, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title: inputValue,
                        }),
                    });
                    //.then(response => response.json())
                }
            }));
            todoItem.prepend(editEl);
            console.log(todoItem);
        }
    }
    else {
        console.error(`Could not find element with ID todo-${todoId}`);
    }
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
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime(),
        title, // 이름이랑 변수에 넣어주는 값이 같다면 생략 가능하다
        createdAt,
    };
    yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos.todos);
    // .then((response) => response.json())
    // .then(() => {
    //   todoInputEl.value = "";
    //   return fetch(API_URL);
    // })
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = yield fetchTodos();
    renderTodo(newTodos.todos);
});
