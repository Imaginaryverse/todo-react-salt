import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodosProvider } from './TodosContext';
import './styles/main.css';

const App = () => {
  return (
    <TodosProvider>
      <div className='App'>
        <Form />
        <div className='list-container'>
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
};

export default App;
