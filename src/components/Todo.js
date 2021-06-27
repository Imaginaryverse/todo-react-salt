import React, { useState } from 'react';
import EditForm from './EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, toggleDone, editTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <li className={todo.done ? 'todo todo-done' : 'todo todo-active'}>
        <EditForm todo={todo} toggleEdit={toggleEdit} editTodo={editTodo} />
      </li>
    );
  } else {
    return (
      <li
        className={todo.done ? 'todo todo-done' : 'todo todo-active'}
        onClick={() => toggleDone(todo.id)}
      >
        <div className='todo__info-container'>
          <p className='todo__date'>{todo.date}</p>
          <h3 className='todo__task'>{todo.task}</h3>
          <p className='todo__description'>{todo.description}</p>
        </div>
        <div className='todo__btn-container'>
          <button className='btn edit-btn' onClickCapture={toggleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            type='button'
            className='btn remove-btn'
            onClick={() => removeTodo(todo.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    );
  }
};

export default Todo;
