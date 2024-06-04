const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:3000/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId : number, todoTitle : string) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);

  if(!todoItem) return;
  todoItem.innerHTML = "";

  // input 엘리먼트
  const inputElement = document.createElement("input");
  inputElement.id = "updateElInput";
  inputElement.value = todoTitle;
  todoItem.append(inputElement);

  // update 버튼
  const updateBtn = document.createElement("span");
  updateBtn.textContent = "✅";
  todoItem.appendChild(updateBtn);

  // 업데이트 버튼=>이벤트 핸들러
  updateBtn.addEventListener("click", async () => {
    const newTitle:string = inputElement.value;

    if (!newTitle) return;

    const updatedTodo = {
      id: todoId,
      title: newTitle,
      createdAt: new Date().toDateString(),
      completed: false,
    };

    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data: any[]) => renderTodo(data));
    })
};


const renderTodo = (newTodos: any[]): void => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
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

const addTodo = () => {
  const title:string = todoInputEl.value;
  const date: Date = new Date();
  const createdAt: string = date.toDateString();

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

const deleteTodo = (todoId:number) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};