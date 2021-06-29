import React, { useState } from 'react';

const EditForm = ({ todo, toggleEdit, editTodo }) => {
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDesc, setEditedDesc] = useState(todo.description);

  const handleTaskChange = e => setEditedTask(e.target.value);
  const handleDescChange = e => setEditedDesc(e.target.value);

  const handleSave = e => {
    e.preventDefault();

    const editedTodo = {
      id: todo.id,
      task: editedTask,
      description: editedDesc,
      date: todo.date,
      done: todo.done,
    };

    editTodo(editedTodo);
    toggleEdit();
  };

  return (
    <form className='edit-form' onSubmit={handleSave}>
      <div className='edit-form__input-container'>
        <div className='input-wrapper'>
          <input
            name='task'
            className='input-text'
            type='text'
            autoComplete='off'
            maxLength='40'
            placeholder='Task'
            value={editedTask}
            onChange={handleTaskChange}
            required
          />
          <span
            className={
              editedTask.length === 40
                ? 'character-counter max'
                : 'character-counter'
            }
          >
            {editedTask.length}/40
          </span>
        </div>
        <div className='input-wrapper'>
          <input
            name='task'
            className='input-text'
            type='text'
            autoComplete='off'
            maxLength='150'
            placeholder='Task'
            value={editedDesc}
            onChange={handleDescChange}
            required
          />
          <span
            className={
              editedDesc.length === 150
                ? 'character-counter max'
                : 'character-counter'
            }
          >
            {editedDesc.length}/150
          </span>
        </div>
      </div>
      <div className='edit-form__btn-container'>
        <input type='submit' className='btn save-btn' value='Save' />
        <button type='button' className='btn cancel-btn' onClick={toggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
