import React from "react";
import todoData from './todoData.json';
import Todo from './Todo';

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const App = () => {
  const title = 'Todo List';

  return (
    <>
      <Header title={title} />

      <div>[실습]</div>

      {todoData.todos.map((value, index) => (
        <Todo
          key={value.id}
          id={value.id}
          task={value.task}
          completed={value.completed}
          priority={value.priority}
        />
      ))}

      <div>------------------------------------------------------------------</div>

      <div>[미션 1] : completed가 true인 값만 map으로 출력하기</div>

      {todoData.todos
        .filter(todo => todo.completed === true)
        .map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}

      <div>------------------------------------------------------------------</div>

      <div>[미션 2] : priority가 5 이상인 값만 map으로 출력하기</div>

      {todoData.todos
        .filter(todo => todo.priority >= 5)
        .map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}

    </>
  );
};

export default App;
// export { App };