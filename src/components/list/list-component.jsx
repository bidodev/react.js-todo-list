import React, { Component } from 'react';
import TodoItem from '../item/item.component';

import './list-component.styles.scss';

export class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <ul className="list-items">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete}/>)}
      </ul>
    );
  }
}

export default TodoList;
