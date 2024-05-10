import React from 'react';

const Todo = ({ id, task, completed, priority }) => {
  return (
    <div>
      <div>id : {id}</div>
      <div>task : {task}</div>
      <div>completed : {completed.toString()}</div>
      <div>priority : {priority}</div>
      <div>==============</div>
      {/* <div>completed : {todo.completed.toString()}</div>
      <div>priority : {todo.priority}</div> */}
    </div>
  )
};

export default Todo;