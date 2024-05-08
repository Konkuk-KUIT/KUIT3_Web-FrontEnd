var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "http://localhost:8080/todos"; //json-server --watch db.json --port 8080
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const completedTodoListEl = document.getElementById("completedTodoList");
todoInputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
//enum 대신 as const 방식을 선호한다고 함..
const sortStrategy = {
    기본: "none",
    사전순: "dictionary",
    날짜순: "date",
};
const buildPage = (sort = sortStrategy.기본) => __awaiter(this, void 0, void 0, function* () {
    //완료된 Todo
    let completedTodos = yield fetchWithFilter(true);
    //완료되지 않은 Todo
    let uncompletedTodos = yield fetchWithFilter(false);
    if (sort != sortStrategy.기본) {
        uncompletedTodos = yield sortTodos(uncompletedTodos.todos, sort);
    }
    renderTodo(uncompletedTodos.todos);
    renderTodo(completedTodos.todos, true);
});
const sortTodos = (todos, sort) => __awaiter(this, void 0, void 0, function* () {
    if (sort == sortStrategy.사전순) {
        return {
            todos: todos.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            }),
        };
    }
    else {
        //sort == sortStrategy.날짜순
        // updatedAt 기준이되, 없는 경우(데이터가 수정된 적이 없는 경우) createdAt으로 비교
        return {
            todos: todos.sort((a, b) => {
                const aDate = new Date(a.updatedAt == undefined ? a.createdAt : a.updatedAt);
                const bDate = new Date(b.updatedAt == undefined ? b.createdAt : b.updatedAt);
                return bDate.getTime() - aDate.getTime();
            }),
        };
    }
});
window.onload = () => buildPage();
const fetchWithFilter = (complete = false) => __awaiter(this, void 0, void 0, function* () {
    // async로 감싸면 Promise를 반환
    const response = yield fetch(API_URL); //fetch(API_URL)이 Response를 감싼 Promise를 반환
    const data = yield response.json();
    //완료 여부 기준 필터링 - default: uncompleted
    if (!complete) {
        return { todos: data.filter((todo) => !todo.completed) };
    }
    else {
        return { todos: data.filter((todo) => todo.completed) };
    }
});
const renderTodo = (todos, complete = false) => {
    console.log(todos, complete);
    let listContainerEl = !complete ? todoListEl : completedTodoListEl;
    listContainerEl.innerHTML = "";
    todos.forEach((todo) => {
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
        listContainerEl.append(listEl);
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
    };
    yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    });
    yield buildPage();
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    yield buildPage();
});
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
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
const updateTodoTitle = (todoId, newTitle) => __awaiter(this, void 0, void 0, function* () {
    const date = new Date();
    const updatedAt = date.toISOString();
    yield fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, updatedAt }),
    });
    yield buildPage();
});
const completeTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    const date = new Date();
    const updatedAt = date.toLocaleString();
    yield fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true, updatedAt }),
    });
    yield buildPage();
});
