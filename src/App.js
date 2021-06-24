import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import {
  getTodosFromLocalStorage,
  removeTodoFromLocalStorage,
  updateTodoInLocalStorage,
} from './utils/localStorage';

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
      <TodoList
        listItems={notDoneTodos}
        onToggleDone={updatedTodo => onToggleDone(updatedTodo)}
        onRemove={todoToRemove => onRemove(todoToRemove)}
      />
      <DoneList
        listItems={doneTodos}
        onToggleDone={updatedTodo => onToggleDone(updatedTodo)}
        onRemove={todoToRemove => onRemove(todoToRemove)}
      />
    </div>
  );
};

export default App;
