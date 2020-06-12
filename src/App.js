import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],
    };
  }

  handleChange =(e) =>{
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    const arr = this.state.todos.slice();
    arr.push(this.state.input);
    this.setState(() => ({ todos: arr }));
  };

  render() {
    return (
      <div className="App">
        {/* header adding a new item */}
        <div className="header-add">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            placeholder="Type something..."
          ></input>
          <button onClick={this.handleClick} className="btn btn-default btn-lg">
            <i className="fas fa-plus"></i>
          </button>
        </div>

        {/* generate the list of items */}
        <ul className="list-items">
          {this.state.todos.map((todo, index) => (
            <li
              className={index % 2 === 0 ? 'item-even' : 'item-odd'}
              key={index}
            >
              {`${index + 1} - ${todo}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
