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

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));
// document onLoad eventListener

const updateTodo = (todoId: number, originalTitle: string) => {
  const todoItem: Element | null = document.querySelector(`#todo-${todoId}`);
  // mission
  if (todoItem !== null) {
    const editEl: HTMLInputElement = document.createElement("input");
    const firstChild: ChildNode | null = todoItem.firstChild;

    // firstChild가 Text 노드인 경우에만 처리
    if (firstChild instanceof Text) {
      editEl.value = (firstChild.textContent ?? "") as string; // 널 병합 연산자
      firstChild.textContent = "";

      // 이벤트 리스너 추가
      editEl.addEventListener("keyup", async (event) => {
        if (event.key === "Enter") {
          const inputValue = editEl.value;
          console.log(inputValue);
          if (editEl.value == "") {
            deleteTodo(todoId);
          } else {
            editEl.remove();
            if (todoItem.firstChild !== null)
              todoItem.firstChild.textContent = inputValue;
          }

          //서버 데이터에 반영하는 부분 추가
          await fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: inputValue,
            }),
          });

          //.then(response => response.json())
        }
      });

      todoItem.prepend(editEl);

      console.log(todoItem);
    }
  } else {
    console.error(`Could not find element with ID todo-${todoId}`);
  }
};

const renderTodo = (newTodos: Todo[]) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl: HTMLLIElement = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl: HTMLSpanElement = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl: HTMLSpanElement = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = async () => {
  const title: string = todoInputEl.value;
  const date: Date = new Date();
  const createdAt: string = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
    title, // 이름이랑 변수에 넣어주는 값이 같다면 생략 가능하다
    createdAt,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos.todos);

  // .then((response) => response.json())
  // .then(() => {
  //   todoInputEl.value = "";
  //   return fetch(API_URL);
  // })
  // .then((response) => response.json())
  // .then((data) => renderTodo(data));
};

const deleteTodo = async (todoId: number) => {
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos.todos);
};
