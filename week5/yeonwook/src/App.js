import React from 'react';
import todoData from './todoData.json';
import Todo from './Todo';
import Completed from './Completed';
import POverFive from './POverFive';

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

      <h3>실습</h3>

      {todoData.todos.map((value, index) => (
        <Todo
          key={value.id}
          id={value.id}
          task={value.task}
          completed={value.completed}
          priority={value.priority}
        />
      ))}

      <h3>미션1: completed가 true인 값만 map으로 출력하기</h3>

      {todoData.todos.map((value, index) => (
        <Completed
          key={value.id}
          id={value.id}
          task={value.task}
          completed={value.completed}
          priority={value.priority}
        />
      ))}

      <h3>미션2: priority가 5 이상인 값만 map으로 출력하기</h3>

      {todoData.todos.map((value, index) => (
        <POverFive
          key={value.id}
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
