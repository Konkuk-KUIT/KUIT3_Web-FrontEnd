import React from 'react';
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

      {todoData.todos.filter(todo => todo.completed).map((value, index) => (
        <Todo
          key={value.id}
          id={value.id}
          task={value.task}
          completed={value.completed}
          priority={value.priority}
        />
      ))}

      <div>------------------</div>

      <h3>미션2: priority가 5 이상인 값만 map으로 출력하기</h3>
      {todoData.todos.filter(todo => todo.priority>=5).map((value, index) => (
        <Todo
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
