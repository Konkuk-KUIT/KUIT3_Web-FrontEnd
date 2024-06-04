import React from 'react';
import todoData from './todoData.json';
import Todo from './Todo';
import Css from './index.css';

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
const completedTodos = todoData.todos.filter(todo => todo.completed);
const highPriorityTodos = todoData.todos.filter(todo => todo.priority >= 5);

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
      {completedTodos.length > 0 ? (
        completedTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))
      ) : (
        <p>완료된 작업이 없습니다.</p>
      )}
      
      <div>------------------</div>

      <h3>미션2: priority가 5 이상인 값만 map으로 출력하기</h3>
      {highPriorityTodos.length > 0 ? (
        highPriorityTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))
      ) : (
        <p>우선순위 5 이상인 작업이 없습니다.</p>
      )}
    </>

  );
};

export default App;
