import React from "react";
import todoData from "./todoData.json";
import Todo from "./Todo";
import "./App.css";

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

      <div className="misson">
        <h3>미션1: completed가 true인 값만 map으로 출력하기</h3>
        {todoData.todos.map((todo) =>
          todo.completed ? (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              priority={todo.priority}
            />
          ) : null
        )}

        <h3>미션2: priority가 5 이상인 값만 map으로 출력하기</h3>
        {todoData.todos.map(
          (todo) =>
            todo.priority >= 5 && (
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                priority={todo.priority}
              />
            )
        )}
      </div>
    </>
  );
};

export default App;
