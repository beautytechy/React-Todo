import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css"



const goalsData = [
  {
    task: 'Eat Food',
    id: 1,
    completed: false
  },
  {
    task: 'Drink Water',
    id: 2,
    completed: false
  },
  {
    task: 'Shower',
    id: 3,
    completed: false
  },

  {
    task: 'Study React',
    id: 4,
    completed: false
  },
  {
    task: 'Study React',
    id: 5,
    completed: false
  },  {
    task: 'Study React',
    id: 6,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: 'Study React',
      goals: goalsData,
    };


  }

  toggleItem = (id) => {
    console.log(id);
    this.setState({
      goals: this.state.goals.map(item => {

        //return new copy of item with only boolean changed
        if (item.id === id) {
          return {
           ...item,
           completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      goals: [...this.state.goals, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      goals: this.state.goals.filter(item => !item.completed)
    });
  };

  render() {                                                         
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          goals={this.state.goals}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App
