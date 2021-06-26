import React, { useContext } from 'react';
import { TodosContext } from '../TodosContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos, toggleDone, removeTodo } = useContext(TodosContext);

  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <Todo
          todo={todo}
          toggleDone={toggleDone}
          removeTodo={removeTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
