const getTodosFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('todos'));

const addTodoToLocalStorage = todo => {
  const todos = getTodosFromLocalStorage() || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const updateTodoInLocalStorage = todoId => {
  const todos = getTodosFromLocalStorage();
  const todo = todos[todos.findIndex(el => el.id === todoId)];

  todo.done = !todo.done;

  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodoFromLocalStorage = todoId => {
  const todos = getTodosFromLocalStorage();
  const filteredTodos = todos.filter(el => el.id !== todoId);
  localStorage.setItem('todos', JSON.stringify(filteredTodos));
};

export {
  getTodosFromLocalStorage,
  addTodoToLocalStorage,
  updateTodoInLocalStorage,
  removeTodoFromLocalStorage,
};
