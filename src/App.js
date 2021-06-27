import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodosProvider } from './TodosContext';
import './styles/app.css';

const App = () => {
  return (
    <TodosProvider>
      <div className='App'>
        <Form />
        <TodoList />
      </div>
    </TodosProvider>
  );
};

export default App;
