import React from 'react';
import Todo from './Todo';

const List = ({ listItems, classnames, onToggleDone, onRemove }) => {
  return (
    <ul className='list'>
      {listItems.map(item => (
        <Todo
          classnames={classnames}
          todo={item}
          onToggleDone={todoId => onToggleDone(todoId)}
          onRemove={todoId => onRemove(todoId)}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default List;
