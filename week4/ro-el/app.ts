const API_URL = "http://localhost:8080/todos"; //json-server --watch db.json --port 8080
const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;
todoInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
  updatedAt?: string;
}
interface Todos {
  todos: Todo[];
}

// const fetchWitFiltering = async (complete: boolean = false): Promise<Todos> => {
//   const response = await fetch(API_URL);
//   const data = await response.json();

//   //완료 여부 기준 필터링 - default: uncompleted
//   let filteredTodos = data.filter((todo: Todo) => !todo.completed);
//   if (complete) {
//     const filteredTodos = data.filter((todo: Todo) => todo.completed);
//   }

//   return filteredTodos;
// }

const fetchAndRenderingWithFilter = async (complete: boolean = false) => {
  // async로 감싸면 Promise를 반환
  const response = await fetch(API_URL); //fetch(API_URL)이 Response를 감싼 Promise를 반환
  const data = await response.json();

  //완료 여부 기준 필터링 - default: uncompleted
  let filteredTodos = data.filter((todo: Todo) => !todo.completed);
  if (complete) {
    const filteredTodos = data.filter((todo: Todo) => todo.completed);
  }

  renderTodo(filteredTodos);
};

window.onload = async() => await fetchAndRenderingWithFilter(true);

const renderTodo = (newTodos: Todo[]) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
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

    todoListEl.append(listEl);
  });
};

const addTodo = async () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toLocaleString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
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
  await fetchAndRenderingWithFilter();
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });

  await fetchAndRenderingWithFilter();
};

const updateTodo = (todoId: number, originalTitle: string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  if (!todoItem) return;
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

const updateTodoTitle = async (todoId: number, newTitle: string) => {
  const date = new Date();
  const updatedAt = date.toLocaleString();

  await fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle, updatedAt }),
  });

  await fetchAndRenderingWithFilter();
};

const completeTodo = async (todoId: number) => {
  const date = new Date();
  const updatedAt = date.toLocaleString();

  await fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: true, updatedAt }),
  })

  await fetchAndRenderingWithFilter();
};
