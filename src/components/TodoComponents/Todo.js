import React from 'react';
import "./Todo.css"

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? 'completed' : ''}`}
      onClick={() => props.toggleTodo(props.item.id)}
    >
      <p>{props.item.title}</p>
    </div>
  );
};

export default Todo;
