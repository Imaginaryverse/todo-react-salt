import React, { useState } from 'react';
import {
  addTodoToLocalStorage,
  getTodosFromLocalStorage,
} from '../utils/localStorage';

const Form = ({ onSubmit }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleTaskChange = e => {
    setTask(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const clearInputFields = () => {
    setTask('');
    setDescription('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime().toString(),
      task,
      description,
      date: new Date().toLocaleString(),
      done: false,
    };

    addTodoToLocalStorage(todo);
    onSubmit(getTodosFromLocalStorage);
    clearInputFields();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='task'>Task</label>
      <input
        name='task'
        className='form__input-text'
        type='text'
        placeholder='Task'
        value={task}
        onChange={handleTaskChange}
        required
      />
      <label htmlFor='task'>Description</label>
      <input
        name='description'
        className='form__input-text'
        type='text'
        placeholder='Description'
        value={description}
        onChange={handleDescriptionChange}
      />
      <input className='form__submit-btn' type='submit' value='Add' />
    </form>
  );
};

export default Form;
