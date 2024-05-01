const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:3001/todos";

interface Todo{
  id: string;
  title: string;
  createdAt:string;
  completed: boolean;
}

interface Todos{
  todos: Todo[];
}

const fetchTodos = async () : Promise<Todo[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}


const updateTodo = (todoId : string, originalTitle : string) => {

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
    updateContainer.remove();
  }

};

const renderTodo = (newTodos : Todo[]) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo : Todo) => {
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

(async ()=>{
  const response = await fetch(API_URL);
  const data = await response.json();
  renderTodo(data);
})();

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

const deleteTodo = async (todoId : string) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos);
    //.then(() => fetch(API_URL))
    //.then((response) => response.json())
    //.then((data) => renderTodo(data));
};
