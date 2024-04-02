const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
todoInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
}); 

const API_URL = "http://localhost:8080/todos";
//json-server --watch db.json --port 8080

const fetchAndRenderingWithFiltering = () => fetch(API_URL)
.then((response) => response.json())
.then((data) => {
  const todos = data.filter(todo => !todo.completed);
  renderTodo(todos);
});
window.onload = fetchAndRenderingWithFiltering();

const renderTodo = (newTodos) => {
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
    }

    iconContainerEl.append(udpateEl);
    iconContainerEl.append(completeEl);
    iconContainerEl.append(deleteEl);

    listEl.append(iconContainerEl);

    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toLocaleString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
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
      return fetchAndRenderingWithFiltering(); //local db의 내용이 변경되었기 때문에, 다시 fetch
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetchAndRenderingWithFiltering());
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
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

const updateTodoTitle = (todoId, newTitle) => {
  const date = new Date();
  const updatedAt = date.toLocaleString();

  fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: newTitle, updatedAt }),
  })
  .then((response) => response.json())
  .then(() => {
    todoInputEl.value = "";
    return fetchAndRenderingWithFiltering();
  });
  // .then((response) => response.json())
  // .then((data) => renderTodo(data));
}

const completeTodo = (todoId) => {
  const date = new Date();
  const updatedAt = date.toLocaleString();

  fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ completed: true, updatedAt }),
  })
  .then((response) => response.json())
  .then(() => fetchAndRenderingWithFiltering());
  // .then((response) => response.json())
  // .then((data) => renderTodo(data));
}