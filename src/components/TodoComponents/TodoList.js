import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
  
  return (
    <div className="list">
      {props.goals.map(item => (
        <Todo key={item.id} item={item} toggleTodo={props.toggleItem} />
      ))}
      <button className="clear-button" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;