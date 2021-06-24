import React from 'react';
import Todo from './Todo';

const DoneList = ({ listItems, onToggleDone, onRemove }) => {
  return (
    <ul className='done-list'>
      <h2>Done</h2>
      {listItems.map(item => (
        <Todo
          classnames='todo done'
          todo={item}
          onToggleDone={todoId => onToggleDone(todoId)}
          onRemove={todoId => onRemove(todoId)}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default DoneList;
