import React from 'react';
import Todo from './Todo';

const TodoList = ({ listItems, onToggleDone, onRemove }) => {
  return (
    <ul className='todo-list'>
      <h2>To do</h2>
      {listItems.map(item => (
        <Todo
          classnames='todo'
          todo={item}
          onToggleDone={todoId => onToggleDone(todoId)}
          onRemove={todoId => onRemove(todoId)}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
