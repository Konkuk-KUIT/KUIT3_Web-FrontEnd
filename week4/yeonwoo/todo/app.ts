const todoListEl = document.getElementById("todoList") as HTMLElement;
const completedListEl = document.getElementById("completedList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:3000/todos";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Todos {
  todos: Todo[];
}

const fetchTodos = async () : Promise<Todos> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return {todos: data};
}

const startFetch = async() => {
  const startData = await fetchTodos();
  const incompleteData = startData.todos.filter(todo => todo.completed == false);
  renderTodo(incompleteData);
  const completeData = startData.todos.filter(todo => todo.completed == true);
  completeRender(completeData);
}

startFetch();

const updateTodo = async(todoId: number, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as Element;
  todoItem.innerHTML = "";
  const inputEl = document.createElement("input");
  inputEl.id = "Input";
  inputEl.value = originalTitle;
  todoItem.append(inputEl);
    
  inputEl.focus();
  inputEl.addEventListener("keydown", async(event) => {
    if(event.key == "Enter"){
      const newTitle = inputEl.value;
      await fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      })
    const updatedTodos = await fetchTodos();
    renderTodo(updatedTodos.todos);
    }
  });
}

const renderTodo = (newTodos: Todo[]) => {
  const incompleteTodos = newTodos.filter(todo => todo.completed == false);
  todoListEl.innerHTML = "";

  incompleteTodos.forEach((todo: Todo) => { 
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;
    
    const icon = document.createElement("div"); // 아이콘위치때문에 수정!
    icon.className = "icon-container";

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    const completeEl = document.createElement("span");
    completeEl.textContent = "✔️";
    completeEl.onclick = () => completeTodo(todo.id);

    icon.append(deleteEl);
    icon.append(udpateEl);
    icon.append(completeEl);
    listEl.append(icon);
    todoListEl.append(listEl);
  });
};

const addTodo = async() => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime().toString(),
    title,
    createdAt,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  });
  ;
  todoInputEl.value = "";
  const addedTodos = await fetchTodos();
  renderTodo((addedTodos).todos);
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos.todos);
};

const completeTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: true }),
  })
  console.log("completeTodo function called");
  const completedTodos = await fetchTodos();
  completeRender(completedTodos.todos);
};

const completeRender = (newTodos: Todo[]) => {
  console.log("completeRender called with todos:", newTodos);
  const completedTodos = newTodos.filter(todo => todo.completed === true);
  console.log("Filtered completed todos:", completedTodos);

  completedTodos.forEach((todo: Todo) => {
    const comlistEl = document.createElement("li");
    comlistEl.textContent = todo.title;
    comlistEl.id = `comtodo-${todo.id}`;

    completedListEl.append(comlistEl);
    console.log(`Added todo to completed list: ${todo.title}`);
  });
};