import React, { Component } from 'react';
import './App.css';
import TodoList from './components/list/list-component';
import Data from './components/data/data-component';

class App extends Component {
  constructor() {
    super();

    this.textInput = React.createRef();

    this.state = {
      todos: [
        {
          id: 1,
          desc: 'Do something cool to the world..',
          status: false,
        },
        {
          id: 2,
          desc: 'Take the Dog out for a walk',
          status: false,
        },
        {
          id: 3,
          desc: 'Meeting my friends',
          status: false,
        },
      ],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const task = this.textInput.current.value;
    this.textInput.current.value = '';

    const todos = [...this.state.todos, { id: this.state.todos.length + 1, desc: task, status: false }];
    this.setState({ todos });
  };

  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Data />
        {/* header adding a new item */}
        <div className="header-add">
          <form onSubmit={this.handleSubmit}>
            <input className="form-control form-control-sm" type="text" ref={this.textInput} />
            <button className="btn">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </div>

        {/* Pass down the status into the List component */}
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete} />
      </div>
    );
  }
}
export default App;
