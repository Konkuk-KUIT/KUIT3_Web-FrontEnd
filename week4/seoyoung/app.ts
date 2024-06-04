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

const fetchTodos = async (): Promise<Todos> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => renderTodo(data));
//   // document onLoad eventListener

document.addEventListener("DOMContentLoaded", async () => {
  const todos = await fetchTodos();
  renderTodo(todos);
})

const updateTodo = async (todoId: number, originalTitle: string): Promise<void> => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement;
  // mission
  const itemInputEl = document.createElement("input");
  itemInputEl.type = "text";
  itemInputEl.value = originalTitle;

  itemInputEl.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
      const updatedTitle = itemInputEl.value.trim();
      if (updatedTitle) {
        await fetch(API_URL + "/" + todoId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: updatedTitle }),
        });
        const newTodos = await fetchTodos();
        renderTodo(newTodos);
          // .then(() => fetch(API_URL))
          // .then((response) => response.json())
          // .then((data) => renderTodo(data));
      }
    }
  });

  todoItem.innerHTML = "";
  todoItem.appendChild(itemInputEl);
  itemInputEl.focus();
};

const renderTodo = (newTodos: Todos): void => {
  todoListEl.innerHTML = "";
  newTodos.todos.forEach((todo) => {
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

const addTodo = async (): Promise<void> => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime().toString(),
    title,
    createdAt,
    completed: false,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
    // .then((response) => response.json())
    // .then(() => {
      todoInputEl.value = "";
      const newTodos = await fetchTodos();
      renderTodo(newTodos);
    //   return fetch(API_URL);
    // })
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};

const deleteTodo = async (todoId: number): Promise<void> => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos);
};
