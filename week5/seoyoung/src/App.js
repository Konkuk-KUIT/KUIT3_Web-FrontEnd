import React from 'react';
import todoData from './todoData.json';
import Todo from './Todo';

const Header = ({ title }) => {   // 컨포넌트는 대문자
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const App = () => {     // 컨포넌트 내에 컨포넌트 만들면 x
  const title = 'Todo List';
  
  return (
    <>
      <Header title={title} />
      {/* <Todo todo={todoData.todos[0]} /> */}
      {/* <Todo 
            id={todoData.todos[0].id}
            task={todoData.todos[0].task} 
            completed={todoData.todos[0].completed.toString()} 
            priority={todoData.todos[0].priority}
          /> */}
      <h2>미션1: completed가 true인 값만 map으로 출력하기</h2>
      {todoData.todos.map((value, index) => (
        value.completed === true && (
          <Todo 
            key={value.id}
            id = {value.id}
            task={value.task}
            completed={value.completed}
            priority={value.priority}
          />
        )
      ))}

      
      <h2>미션2: priority가 5 이상인 값만 map으로 출력하기</h2>
      {todoData.todos.map((value, index) => (
        value.priority >= 5 && (
          <Todo 
            key={value.id}
            id = {value.id}
            task={value.task}
            completed={value.completed}
            priority={value.priority}
          />
        )
      ))}
    </>
  );
};

// export default App;    // 대표적인 것들만 export
export { App };     // 전체를 export