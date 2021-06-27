import React, { useState, useEffect, useContext } from 'react';
import { TodosContext } from '../TodosContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos, toggleDone, editTodo, removeTodo } = useContext(TodosContext);
  const [remainingTodos, setRemainingTodos] = useState(
    todos.filter(el => !el.done).length
  );

  useEffect(() => {
    setRemainingTodos(todos.filter(el => !el.done).length);
  }, [todos]);

  return (
    <>
      <p className='todo-counter'>
        You have {remainingTodos} todo{remainingTodos === 1 ? '' : 's'} left
      </p>
      <ul className='todo-list'>
        {todos.map(todo => (
          <Todo
            todo={todo}
            toggleDone={toggleDone}
            editTodo={editTodo}
            removeTodo={removeTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
