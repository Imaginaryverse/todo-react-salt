import React, { useState } from 'react';

const Todo = ({ classnames, todo, onToggleDone, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleDone = todoId => {
    onToggleDone(todoId);
  };

  const removeTodo = todoId => {
    onRemove(todoId);
  };

  return (
    <li
      className={isOpen ? classnames + ' open' : classnames}
      onClick={toggleOpen}
    >
      <div className='todo__info-container'>
        <p className='todo__date'>{todo.date}</p>
        <h2 className='todo__task'>{todo.task}</h2>
        <p className='todo__description'>{todo.description}</p>
      </div>
      <div className='todo__btn-container'>
        <button
          type='button'
          className='done-btn'
          onClick={() => toggleDone(todo.id)}
        >
          Done
        </button>
        <button
          type='button'
          className='remove-btn'
          onClick={() => removeTodo(todo.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Todo;