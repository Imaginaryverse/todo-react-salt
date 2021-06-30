import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditForm from './EditForm';

const Todo = ({
  todo, toggleDone, editTodo, removeTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  if (isEditing) {
    return (
      <li className={todo.done ? 'todo todo-done' : 'todo todo-active'}>
        <EditForm todo={todo} toggleEdit={toggleEdit} editTodo={editTodo} />
      </li>
    );
  }
  return (
    <li
      className={todo.done ? 'todo todo-done' : 'todo todo-active'}
      onClick={() => toggleDone(todo.id)}
    >
      <section className='todo__info-container'>
        <h3 className='todo__task'>{todo.task}</h3>
        <p className='todo__description'>{todo.description}</p>
        <p className='todo__date'>{todo.date}</p>
      </section>
      <section className='todo__btn-container'>
        <button className='btn edit-btn' onClickCapture={toggleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          type='button'
          className='btn remove-btn'
          onClickCapture={() => removeTodo(todo.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    </li>
  );
};

export default Todo;
