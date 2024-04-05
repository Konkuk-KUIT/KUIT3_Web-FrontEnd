const todoListEl = document.getElementById("todoList"); // 할 일 목록을 나타낼 곳
const todoInputEl = document.getElementById("todoInput"); // 할 일 입력 필드

const API_URL = "http://localhost:3000/todos";

// local db에서 fetch를 해와서 보여줌
fetch(API_URL)
    .then((response) => response.json()) // 서버로부터 받은 응답(response) 처리
    .then((data) => renderTodo(data)); // 파싱된 데이터(data) 처리 (renderTodo 함수 호출해 화면에 표시되도록)

// 할 일 목록을 만들어주는 함수
const renderTodo = (newTodos) => {
    // todoListEl 요소의 내부 HTML을 빈 문자열로 설정
    todoListEl.innerHTML = "";

    newTodos.forEach((todo) => { // newTodos의 각각의 todo에 대해 아래의 내용을 수행
        // 목록(list) 하나 생성
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;

        // 삭제 버튼(element)
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);

        // listEl에 삭제 요소 추가
        listEl.append(deleteEl);

        // todoListEl에 listEl 하나 추가
        todoListEl.append(listEl);
    });
};

// 할 일 추가해주는 함수
const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();

    if (!title) return; // 입력값이 없을 경우 return

    // 새로운 할 일에 해당하는 newTodo 객체 생성
    const newTodo = {
        id: date.toISOString(),
        title,
        createdAt,
    };

    // POST api 요청
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newTodo, completed: false }), // POST api 요청의 본문에 전송할 데이터에 해당
    })
        .then((response) => response.json())
        .then(() => {
            todoInputEl.value = ""; // 입력 필드(todoInputEl) 비워주기
            return fetch(API_URL); // 전체 할 일 목록을 받아오기 위한 GET api 요청 (fetch의 기본 메소드는 GET임)
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data)); // 최신 업데이트된 목록을 화면에 표시
};

// 할 일 삭제해주는 함수
const deleteTodo = (todoId) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
