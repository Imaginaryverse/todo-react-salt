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
      <div className='form__input-container'>
        <label htmlFor='task'>Task</label>
        <div className='input-wrapper'>
          <input
            name='task'
            className='input-text'
            type='text'
            autoComplete='off'
            maxLength='50'
            placeholder='Task'
            value={task}
            onChange={handleTaskChange}
            required
          />
          <span className='character-counter'>{task.length}/50</span>
        </div>
        <label htmlFor='task'>Description</label>
        <div className='input-wrapper'>
          <input
            name='description'
            className='input-text'
            type='text'
            maxLength='350'
            autoComplete='off'
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChange}
          />
          <span className='character-counter'>{description.length}/350</span>
        </div>
      </div>
      <input className='add-btn' type='submit' value='Add' />
    </form>
  );
};

export default Form;
