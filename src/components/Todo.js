import React, { useState } from 'react';
import EditForm from './EditForm';

const Todo = ({ todo, toggleDone, editTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <li className={todo.done ? 'todo done' : 'todo'}>
        <EditForm todo={todo} toggleEdit={toggleEdit} editTodo={editTodo} />
      </li>
    );
  } else {
    return (
      <li
        className={todo.done ? 'todo done' : 'todo'}
        onClick={() => toggleDone(todo.id)}
      >
        <div className='todo__info-container'>
          <p className='todo__info-container__date'>{todo.date}</p>
          <h3 className='todo__info-container__task'>{todo.task}</h3>
          <p className='todo__info-container__description'>
            {todo.description}
          </p>
        </div>
        <div className='todo__btn-container'>
          <button
            type='button'
            className='remove-btn'
            onClick={() => removeTodo(todo.id)}
          >
            Remove
          </button>
          <button className='edit-btn' onClickCapture={toggleEdit}>
            Edit
          </button>
        </div>
      </li>
    );
  }
};

export default Todo;
