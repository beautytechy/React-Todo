import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"


const goalsData = [
  {
    title: 'Eat Food',
    id: 1,
    completed: false
  },
  {
    name: 'Drink Water',
    id: 2,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Study React',
      goals: goalsData
    };


  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      goals: this.state.goals.map(item => {
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
      title: itemName,
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
          <h1>Shopping List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          goals={this.state.goals}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App
