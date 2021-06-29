const getTodosFromLocalStorage = () => {
  if (!JSON.parse(localStorage.getItem('todos'))) {
    const todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }

  return JSON.parse(localStorage.getItem('todos'));
};

const updateLocalStorage = todos =>
  localStorage.setItem('todos', JSON.stringify(todos));

export { getTodosFromLocalStorage, updateLocalStorage };
