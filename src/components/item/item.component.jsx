import React, { Component } from 'react';

class TodoItem extends Component {
  changeStyles = () => {
    if (this.props.todo.status === true) {
      this.setState({ status: false });
    }
  };


  render() {
    const { id, desc } = this.props.todo;
    return (
      <li>
        {`${id} - ${desc}`}
        <div>
          <input type="checkbox" onChange={this.props.handleComplete.bind(this, id)} />
          <button className="btn" onClick={() => this.props.del(id)}>✗</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
