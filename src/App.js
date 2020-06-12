import React, { Component } from 'react';
import './App.css';
import List from './components/list-component';
import Data from './components/data-component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['Improve my React.js skills', 'Look for new plants', "New features for my todo-list"],
    };
  }

  handleClick = () => {
    //not the best way
    const input = document.querySelector('.form-control').value;

    //copy current list of items
    const list = [...this.state.todos];

    //insert the new item inside the list array
    list.push(input);

    //update state with the new list array
    this.setState(() => ({ todos: list }));
  };

  handleDelete = (event) => {
    console.log(event.target)
    //copy current list of items
    const list = [...this.state.todos];
  };

  render() {
    return (
      <div className="App">
        <Data />

        {/* Pass down the status into the List component */}
        <List todos={this.state.todos} />

        {/* header adding a new item */}
        <div className="header-add">
          <input
            className="form-control"
            type="text"
            placeholder="Type something..."
          ></input>
          <button onClick={this.handleClick} className="btn btn-default btn-lg">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
