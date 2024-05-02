const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:3000/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

interface Todos {
  todos: Todo[];
}

const fetchTodos = async (): Promise<Todos> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return { todos: data };
};

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId: number, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
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

const renderTodo = (newTodos: Todo[]): void => {
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

  if (!title) return;

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
    body: JSON.stringify({ ...newTodo, completed: false }),
  })
    .then((response) => response.json())
    .then(() => {
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos.todos);
};
