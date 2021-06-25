import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import {
  getTodosFromLocalStorage,
  removeTodoFromLocalStorage,
  updateTodoInLocalStorage,
} from './utils/localStorage';
import './styles/main.css';

const App = () => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [notDoneTodos, setNotDoneTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const onSubmit = todosToAdd => {
    setTodos(todosToAdd);
  };

  const setDoneStates = todos => {
    const done = [];
    const notDone = [];
    todos.forEach(todo => {
      if (todo.done) {
        done.push(todo);
      } else {
        notDone.push(todo);
      }
    });

    setDoneTodos(done);
    setNotDoneTodos(notDone);
  };

  const onToggleDone = todoId => {
    updateTodoInLocalStorage(todoId);
    setTodos(getTodosFromLocalStorage());
  };

  const onRemove = todoId => {
    removeTodoFromLocalStorage(todoId);
    setTodos(getTodosFromLocalStorage());
  };

  useEffect(() => {
    console.log('todos were set');
    setDoneStates(todos);
  }, [todos]);

  return (
    <div className='App'>
      <Form onSubmit={todosToAdd => onSubmit(todosToAdd)} />
      <section className='list-container'>
        <h2>To do</h2>
        <List
          listItems={notDoneTodos}
          classnames='todo'
          onToggleDone={updatedTodo => onToggleDone(updatedTodo)}
          onRemove={todoToRemove => onRemove(todoToRemove)}
        />
        <h2>Done</h2>
        <List
          listItems={doneTodos}
          classnames='todo done'
          onToggleDone={updatedTodo => onToggleDone(updatedTodo)}
          onRemove={todoToRemove => onRemove(todoToRemove)}
        />
      </section>
    </div>
  );
};

export default App;
