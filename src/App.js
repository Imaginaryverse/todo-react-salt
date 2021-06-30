import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodosProvider } from './TodosContext';
import './styles/app.css';

const App = () => (
  <TodosProvider>
    <main className='App'>
      <Form />
      <TodoList />
    </main>
  </TodosProvider>
);

export default App;
