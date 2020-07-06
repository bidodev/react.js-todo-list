import React, { useState } from 'react';
import './App.css';
import TodoList from './components/list/list-component';
import Data from './components/data/data-component';

const App = () => {
  const [todos, setTodos] = useState([]);

  const textInput = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = textInput.current.value;

    if (!task) return;

    setTodos(() => [...todos, { id: todos.length, desc: task, status: false }]);

    textInput.current.value = '';
  };

  const handleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].status = !newTodos[id].status;

    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = [...todos];
    setTodos(() => newTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Data />
      {/* header adding a new item */}
      <div className="header-add">
        <form onSubmit={handleSubmit}>
          <input className="form-control form-control-sm" type="text" ref={textInput} />
          <button className="btn">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>

      {/* Pass down the status into the List component */}
      <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} />
    </div>
  );
};
export default App;
