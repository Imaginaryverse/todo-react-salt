import React, { useState, useContext } from 'react';
import { TodosContext } from '../TodosContext';

const Form = () => {
  const { addTodo, clearTodos } = useContext(TodosContext);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const clearInputFields = () => {
    setTask('');
    setDescription('');
  };

  const handleTaskChange = e => {
    setTask(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime(),
      task,
      description,
      date: new Date().toLocaleString(),
      done: false,
    };

    addTodo(todo);
    clearInputFields();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <div className='form__input-container'>
        <label htmlFor='task'>Task</label>
        <div className='input-wrapper'>
          <input
            name='task'
            className='input-text'
            type='text'
            autoComplete='off'
            maxLength='40'
            placeholder='Task'
            value={task}
            onChange={handleTaskChange}
            required
          />
          <span
            className={
              task.length === 40 ? 'character-counter max' : 'character-counter'
            }
          >
            {task.length}/40
          </span>
        </div>
        <label htmlFor='task'>Description</label>
        <div className='input-wrapper'>
          <input
            name='description'
            className='input-text'
            type='text'
            maxLength='150'
            autoComplete='off'
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChange}
          />
          <span
            className={
              description.length === 150
                ? 'character-counter max'
                : 'character-counter'
            }
          >
            {description.length}/150
          </span>
        </div>
      </div>
      <div className='form__btn-container'>
        <button className='btn clear-btn' type='button' onClick={clearTodos}>
          Clear All
        </button>
        <input className='btn add-btn' type='submit' value='Add' />
      </div>
    </form>
  );
};

export default Form;
