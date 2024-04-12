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

    // newTodos의 각각의 todo에 대해 아래의 내용을 수행
    newTodos.forEach((todo) => {
        // 목록(list) 하나 생성
        const listEl = document.createElement("li");
        listEl.id = `todo-${todo.id}`; // listEl의 id를 지정해줄 때 todo의 id를 활용함

        // 할 일 제목(title) element
        const titleEl = document.createElement("span");
        titleEl.textContent = todo.title;

        // 할 일 제목(title) input element
        const titleInputEl = document.createElement("input");
        titleInputEl.type = "text";
        titleInputEl.value = todo.title;
        titleInputEl.style.display = "none"; // 초기에는 input 숨기기

        // 업데이트 버튼(element)
        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.className = "updateBtn";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);

        // 삭제 버튼(element)
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);

        // listEl에 업데이트, 삭제 요소 추가
        listEl.append(titleEl);
        listEl.append(titleInputEl);
        listEl.append(updateEl);
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
        id: date.getTime().toString(),
        // id: date.getTime(),
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

// 할 일 수정(업데이트)해주는 함수
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`); // `todo-${todo.id}`라는 id를 찾아서 가져옴(listEl의 id, 즉, 목록 한 줄의 id를 가져옴)
    const titleEl = todoItem.querySelector(`span`);
    const titleInputEl = todoItem.querySelector(`input[type="text"]`);
    const updateEl = todoItem.querySelector(`.updateBtn`);

    if (titleInputEl.style.display === "none") { // span이 보이고, input이 숨김 처리일 때
        // span -> input으로 변경
        titleEl.style.display = "none"; // 기존 span 안 보이게 하기
        titleInputEl.style.display = "inline";
        titleInputEl.value = originalTitle;
        titleInputEl.focus();
        updateEl.textContent = "✅";
    } else { // input이 보이고, span이 숨김 처리일 때

        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: titleInputEl.value }), // 업데이트된 내용을 서버에 전송
        })
            .then((response) => response.json())
            .then(() => {
                // input -> span으로 변경
                titleEl.textContent = titleInputEl.value; // 업데이트 된 title 반영
                titleInputEl.style.display = "none";
                titleEl.style.display = "inline";

                // local db에서 fetch를 해와서 보여줌 (여기에서는 목록 업데이트)
                fetch(API_URL)
                    .then((response) => response.json()) // 서버로부터 받은 응답(response) 처리
                    .then((data) => renderTodo(data)); // 파싱된 데이터(data) 처리 (renderTodo 함수 호출해 화면에 표시되도록)
            })
    }
};