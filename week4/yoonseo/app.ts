const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:8080/todos";

interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
}

interface Todos {
    todos: Todo[];
}

const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch(API_URL);
    const data: Todos = await response.json();
    return data.todos;  //Todos 인터페이스의 todos 배열을 반환
};

//페이지가 로드될 때 fetchTodos 함수를 호출하고, 그 결과를 renderTodo에 전달
document.onload = async () => {
    const todos = await fetchTodos();
    renderTodo(todos);
}
 
//4주차 mission: typescript로 바꾸고, async와 await 사용하는 방법으로 바꾸기
//document onLoad eventListener : onLoad 될 때 fetchTodos를 실행해서 renderTodo에 넘기는 것 - 좋은 방식

const updateTodo = async (todoId: number, originalTitle: string) => {
    const todoItem = document.querySelector(`#todo-${todoId}`) as Element;
    todoItem.innerHTML = "";
    // mission
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.value = originalTitle;
    inputTitle.className = "updateInput";

    todoItem.appendChild(inputTitle);

    inputTitle.focus();

    inputTitle.addEventListener("keypress", async (event) => {
        if(event.key == "Enter" && inputTitle.value.trim() !== "" && inputTitle.value !== originalTitle){
            await fetch(API_URL + "/" + todoId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: inputTitle.value }), 
            });
            
            const newTodos = await fetchTodos();
            renderTodo(newTodos);
        }
    });
};

const renderTodo = (newTodos: Todo[]) => {
    todoListEl.innerHTML = "";
    newTodos.forEach((todo: Todo) => {
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

const addTodo = async () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toISOString();

    if (!title) return;

    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
        completed: false
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    });
    
    todoInputEl.value = "";
    const newTodos = await fetchTodos();
    renderTodo(newTodos);
};

const deleteTodo = async (todoId: number) => {
    await fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const newTodos = await fetchTodos();
    renderTodo(newTodos);
};
