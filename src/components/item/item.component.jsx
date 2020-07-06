import React from 'react';

import './item.styles.scss'

const TodoItem =({handleComplete, handleDelete, todo})=> {
  const { id, desc, status } = todo;
  
    return (
      <li className={status ? 'done' : ''}>
        {`${id + 1} - ${desc}`}
        <div>
          <input type="checkbox" onChange={() => handleComplete(id)} />
          <button className="btn" onClick={() => handleDelete(id)}>
            ✗
          </button>
        </div>
      </li>
    );
  
}

export default TodoItem;
