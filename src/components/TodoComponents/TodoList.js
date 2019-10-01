import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
  
  return (
    <div className="list">
      {props.goals.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
     
      <button className="clear-button" onClick={props.clearCompleted}>
        {console.log(props)}
        Clear Completed
      </button>
     
    </div>
  );
};

export default TodoList;