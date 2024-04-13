const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL = "http://localhost:3001/todos";

// fetchTodos 함수를 async 함수로 변경
const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  renderTodo(data);
};

fetchTodos();

const updateTodo = async (todoId: string, originalTitle: string) => {
  const newTitle = prompt("수정사항을 입력하세요:", originalTitle); //입력받기
  if (!newTitle || newTitle === originalTitle) {
    return; // 취소 또는 변경사항이 없을 경우
  }

  await fetch(`${API_URL}/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle, completed: false }),
  });

  await fetchTodos();
};

const renderTodo = (newTodos: any[]) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.id = `todo-${todo.id}`;

    const textSpan = document.createElement("span");
    textSpan.textContent = todo.title;
    textSpan.className = "text";
    textSpan.onclick = () => {
      updateTodo(todo.id, todo.title);
    };

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.className = "deleteBtn";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.className = "updateBtn";
    updateEl.onclick = () => {
      updateTodo(todo.id, todo.title);
    };

    listEl.append(textSpan, deleteEl, updateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = async () => {
  const title = todoInputEl.value;
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

  todoInputEl.value = "";
  await fetchTodos();
};

todoInputEl.addEventListener('keydown', async (event) => {
  if (event.key === "Enter") {
    await addTodo();
    event.preventDefault(); 
  }
});

const deleteTodo = async (todoId: string) => {
  await fetch(`${API_URL}/${todoId}`, {
    method: "DELETE",
  });

  await fetchTodos();
};

