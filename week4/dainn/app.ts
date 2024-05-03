import 'core-js/features/promise';

const todoListEl = document.getElementById("todoList") as HTMLElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

const API_URL: string = "http://localhost:3000/todos";


interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
  }
  
interface Todos {
    todos: Todo[];
  }

const fetchTodos = async () : Promise<Todo[]> => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  }

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId: String, originalTitle: String) => {
  if (!todoListEl) return;

  console.log('updateTodo');
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // mission
  if (!todoItem) return;
  console.log(todoItem);

  const listEl = document.getElementById(todoItem.id);
  const input = document.createElement('input');
  if (!input) return;
  if (!listEl) return;

  input.type = 'text';
  listEl.appendChild(input)

  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const value = input.value.trim();
      if (value) {
        const changed = {
          "title" : value
        }

        fetch(API_URL + "/" + todoId, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(changed),
        })
          .then((response) => response.json()) // 서버의 응답을 JSON으로 파싱
          .then((data) => renderTodo(data));
        
      }
    }
  });

};

const renderTodo = (newTodos: Todo[]) => {
    todoListEl.innerHTML = "";
    newTodos.forEach((todo: Todo) => {
      const listEl = document.createElement("li");
      listEl.textContent = todo.title;
      listEl.id = `todo-${todo.id}`;
  
      const deleteEl = document.createElement("span");
      deleteEl.textContent = "🗑️";
      deleteEl.onclick = () => deleteTodo(todo.id);
  
      const udpateEl = document.createElement("span");
      udpateEl.textContent = "✏️";
      udpateEl.onclick = () => updateTodo(todo.id.toString(), todo.title);
  
      listEl.append(deleteEl);
      listEl.append(udpateEl);
      todoListEl.append(listEl);
    });
  };

  const addTodo = async() => {
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
    });

    const newTodos = await fetchTodos();
    if (newTodos){
        todoInputEl.value = "";
        renderTodo(newTodos);
    }

    //   .then((response) => response.json())
    //   .then(() => {
    //     todoInputEl.value = "";
    //     return fetch(API_URL);
    //   })
    //   .then((response) => response.json())
    //   .then((data) => renderTodo(data));
  };

const deleteTodo = async (todoId: number) => {
  console.log('delete!')
  console.log(todoId)
  
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });

  const newTodos = await fetchTodos();
  renderTodo(newTodos);

    // .then(() => fetch(API_URL))
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
};


// app.ts
function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello("TypeScript"));