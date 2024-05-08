const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3001/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

/*const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  // mission
};*/

const updateTodo = (todoId, originalTitle) => {
  const newTitle = prompt("수정사항을 입력하세요:", originalTitle); //입력받기
  if (!newTitle || newTitle === originalTitle) {
    return; // 취소 또는 변경사항이 없을 경우
  }

  fetch(`${API_URL}/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle, completed: false }),
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};



const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.id = `todo-${todo.id}`;
   

    // 할 일 텍스트를 담을 span 요소 생성 및 추가
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.title;
    textSpan.className = "text"; // 스타일을 위한 클래스 추가  
    textSpan.onclick = (e) => { //클릭 이벤트에 updateTodo 함수 연결
      e.stopPropagation(); 
      updateTodo(todo.id, todo.title);
    };

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.className = "deleteBtn"; // 클래스 추가로 스타일 적용 및 이벤트 구분
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.className = "updateBtn"; // 클래스 추가로 스타일 적용 및 이벤트 구분
    updateEl.onclick = (e) => {
      e.stopPropagation(); 
      updateTodo(todo.id, todo.title);
    };
  

    /*listEl.appendChild(deleteEl);
    listEl.appendChild(updateEl);
    todoListEl.appendChild(listEl);
    todoListEl.appendChild(listEl);*/

    listEl.append(textSpan, deleteEl, updateEl);
    todoListEl.append(listEl);


  

  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime().toString(), //id값을 문자열로 변환
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
//엔터키를 입력했을 때 할 일 추가하는 이벤트 리스너
todoInputEl.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    addTodo();
    event.preventDefault(); // 폼 제출을 방지
  }});

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};





