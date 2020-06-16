import React, { Component } from 'react';
import TodoItem from '../item/item.component';

import './list-component.styles.scss';

export class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <ul className="list-items">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} handleComplete={this.props.handleComplete}/>)}
      </ul>
    );
  }
}
// // PropTypes
// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// };

export default TodoList;
