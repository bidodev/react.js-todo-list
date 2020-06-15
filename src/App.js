import React, { Component } from 'react';
import './App.css';
import List from './components/list-component';
import Data from './components/data-component';

class App extends Component {
  constructor() {
    super();
    // Create the ref
    this.textInput = React.createRef();

    this.state = {
      todos: [
        'Improve my React.js skills',
        'Look for new plants',
        'New features for my todo-list',
      ],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.textInput.current.value;
    this.textInput.current.value = '';

    const todos = [...this.state.todos, input];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <Data />

        {/* Pass down the status into the List component */}
        <List todos={this.state.todos} />

        {/* header adding a new item */}
        <div className="header-add">
          <form onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" ref={this.textInput} />
            <button className="btn">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
