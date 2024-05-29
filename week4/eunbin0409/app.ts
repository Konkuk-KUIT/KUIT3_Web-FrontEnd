const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:8080/todos";

const fetchTodo = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data
}

const updateTodo = async (todoId : number, originalTitle : string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  const newTitle = prompt("Enter new todo:", originalTitle);

  if(!newTitle) {
    alert("Todo cannot be empty!");
  }

  try {
    const response = await fetch (`${API_URL}/${todoId}`, {
      method : "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle, completed: false }),
    });
    const data = await response.json();
    renderTodo(data);
  } catch (err) {
    console.error(err);
  }
}

//@desc redering todo
const renderTodo = (newTodos : any []) => {
  if(!todoListEl) return;

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

//@desc add todo
const addTodo = async () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
    title,
    createdAt,
  };

  try {
    const response = await fetch (API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    await response.json();
    todoInputEl.value = "";
    const data = await fetchTodo();
    renderTodo(data);
  } catch (err) {
    console.error(err);
  }
}

const deleteTodo = async (todoId:number) => {
  try {
    await fetch (`${API_URL}/${todoId}`, {
      method: "DELETE",
    });
    const data = await fetchTodo();
    renderTodo(data);
  } catch (err) {
    console.log(err);
  }
}
