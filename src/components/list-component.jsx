import React from 'react';
import './list-component.styles.scss';

const List = (props) => {
  console.log('props', props.todos);
  return (
    <ul className="list-items">
      {props.todos.map((todo, index) => (
        <li className={index % 2 === 0 ? 'item-even' : 'item-odd'} key={index}>
          {`${index + 1} - ${todo}`}
          <button className="btn">✗</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
