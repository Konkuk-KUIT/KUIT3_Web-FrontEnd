import React from "react";

const Todo = ({ id, task, completed, priority }) => {
  return (
    <>
      <li className="todo">
        <div>
          <span className="key">id: </span>
          <span className="value">{id}</span>
        </div>
        <div>
          <span className="key">task: </span>
          <span className="value">{task}</span>
        </div>
        <div>
          <span className="key">completed: </span>
          <span className="value">{completed.toString()}</span>
        </div>
        <div>
          <span className="key">priority: </span>
          <span className="value">{priority}</span>
        </div>
      </li>
      <p></p>
    </>
  );
};

export default Todo;
