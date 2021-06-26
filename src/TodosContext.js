import React, { useState, createContext, useEffect } from 'react';
import sortTodos from './utils/sortTodos';
import {
  getTodosFromLocalStorage,
  updateLocalStorage,
} from './utils/localStorage';

export const TodosContext = createContext();

export const TodosProvider = props => {
  const [todos, setTodos] = useState(sortTodos(getTodosFromLocalStorage()));

  const addTodo = todo =>
    setTodos(prevTodos => sortTodos([...prevTodos, todo]));

  const toggleDone = todoId => {
    const todosUpdated = todos.map(el => {
      if (el.id === todoId) {
        el.done = !el.done;
        return el;
      }

      return el;
    });
    setTodos(sortTodos(todosUpdated));
  };

  const removeTodo = todoId => setTodos(todos.filter(el => el.id !== todoId));

  useEffect(() => {
    updateLocalStorage(todos);
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleDone, removeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};
