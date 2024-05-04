const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // mission [implement update todo]
  const inputContent = document.createElement("input");
  inputContent.value = originalTitle;
  inputContent.className = "updateInput";

  //add event listener
  const fetchUpdate = () => {
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      body: JSON.stringify({ title: inputContent.value }),
    })
      .then(() => fetch(API_URL))
      .then((response) => response.json())
      .then((data) => renderTodo(data));
  };

  const enterKeyEvent = (e) => {
    if (e.key === "Enter") {
      fetchUpdate();
    }
  };
  inputContent.addEventListener("keyup", enterKeyEvent);

  const outsideClickEvent = (e) => {
    if (inputContent.contains(e.target) || e.target.className === "updateBtn") {
      console.log("clicked inside");
    } else {
      console.log("clicked outside");
      fetchUpdate();
      // document.body.removeEventListener("click", outsideClickEvent);
    }
  };

  //event listener 중복 방지
  // if (!document.body.classList.contains("click-event")) {
  document.body.addEventListener("click", outsideClickEvent);
  // document.body.classList.add("click-event");
  // }

  //remove origin title & insert input
  todoItem.removeChild(todoItem.childNodes[0]);
  todoItem.insertBefore(inputContent, todoItem.firstChild);
};

const renderTodo = (newTodos) => {
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
