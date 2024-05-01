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
      {todoData.todos.map((value, index) => (
        <Todo
          key={value.id} //or key={index}
          id={value.id}
          task={value.task}
          completed={value.completed}
          priority={value.priority}
        />
      ))}

    </>
  );
};

export default App;
