const countRemainingTodos = todos => todos.filter(todo => !todo.done).length;

export default countRemainingTodos;
