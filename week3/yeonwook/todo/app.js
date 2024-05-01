const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3001/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {

  const updateContainer = document.createElement("li");

  const inputToDoEl = document.createElement("input");
  const updateButton = document.createElement("button");
  updateButton.classList.add("updatebutton");
  updateButton.textContent = "수정완료";

  inputToDoEl.setAttribute("id", "todoInput");
  inputToDoEl.type = "text";
  inputToDoEl.placeholder = `${originalTitle} 수정`;
  updateContainer.append(inputToDoEl);
  updateContainer.append(updateButton);
  todoListEl.append(updateContainer)

  updateButton.onclick = ()=>{
    const newTitle = inputToDoEl.value.toString();
    if(!newTitle) return;
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers:{"Content-Type": "application/json"},
      body : JSON.stringify({
        title: newTitle, completed : false
      })
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
    todoListEl.remove(inputToDoEl);
    todoListEl.remove(updateButton);
  }

};

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("button");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("button");
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
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};
