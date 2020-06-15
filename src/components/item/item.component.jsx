import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { id, desc, status } = this.props.todo;
    return (
      <li>
        {`${id} - ${desc}`}
        <div>
          <input type="checkbox" onChange={this.props.update} />
          <button className="btn" onClick={() => this.props.del(id)}>✗</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
