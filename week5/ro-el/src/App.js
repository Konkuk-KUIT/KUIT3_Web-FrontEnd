import React from "react";
import todoData from "./todoData.json";
import Todo from "./Todo";

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const App = () => {
  const title = "Todo List";

  return (
    <>
      <Header title={title} />

      <h2>실습</h2>
      {/* <Todo todo={todoData.todos[0]} /> */}
      <ul className="todo-list">
        {todoData.todos.map((value, index) => (
          <Todo
            key={value.id} //key 값으로 index를 넣으면 안 됨
            id={value.id}
            task={value.task}
            completed={value.completed}
            priority={value.priority}
          />
        ))}
      </ul>
      <hr />

      <h2>미션1: completed가 true인 값만 map으로 출력</h2>
      <ul className="todo-list">
        {todoData.todos.map((value, index) =>
          value.completed ? ( //삼항 연산자
            <Todo
              key={value.id}
              id={value.id}
              task={value.task}
              completed={value.completed}
              priority={value.priority}
            />
          ) : null
        )}
      </ul>
      <hr />

      <h2>미션2: priority가 5 이상인 값만 map으로 출력</h2>
      <ul className="todo-list">
        {todoData.todos.map(
          (value, index) =>
            value.priority >= 5 && ( //단축 평가 논리 계산법
              <Todo
                key={value.id}
                id={value.id}
                task={value.task}
                completed={value.completed}
                priority={value.priority}
              />
            )
        )}
      </ul>
    </>
  );
};

export default App;
