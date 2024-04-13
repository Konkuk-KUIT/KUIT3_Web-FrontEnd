const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

interface Todo {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

// interface Todos {
//   todos: Todo[];
// }

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

window.addEventListener(
  "load",
  async () => {
    const newTodos = await fetchTodos();
    renderTodo(newTodos);
  },
  false
);

const updateTodo = (todoId: string, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // mission [implement update todo]
  const inputContent = document.createElement("input");
  inputContent.value = originalTitle;
  inputContent.className = "updateInput";

  //add event listener
  const fetchUpdate = async () => {
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      body: JSON.stringify({ title: inputContent.value }),
    })
    const newTodos = await fetchTodos();
    renderTodo(newTodos);
  };

  const enterKeyEvent = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      fetchUpdate();
    }
  };
  inputContent.addEventListener("keyup", enterKeyEvent);

  const outsideClickEvent = (e: MouseEvent) => {
    if (!e.target) return;
    if (inputContent.contains(<Node>e.target) || (<HTMLElement>e.target).className === "updateBtn") {
      console.log("clicked inside");
    } else {
      console.log("clicked outside");
      fetchUpdate();
      //document.body.removeEventListener("click", outsideClickEvent);
    }
  };

  document.body.addEventListener("click", outsideClickEvent);


  //remove origin title & insert input
  if (!todoItem) return;
  todoItem.removeChild(todoItem.childNodes[0]);
  todoItem.insertBefore(inputContent, todoItem.firstChild);
};

const renderTodo = (newTodos: Todo[]) => {
  if (!todoListEl) return;
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

const addTodo = async () => {
  if (!todoInputEl) return;
  const title = (todoInputEl as HTMLInputElement).value;
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
  (todoInputEl as HTMLInputElement).value = "";
  const newTodos = await fetchTodos();
  renderTodo(newTodos);
};

const deleteTodo = async (todoId: string) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos);
};
