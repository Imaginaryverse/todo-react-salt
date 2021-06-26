const sortTodos = todos => {
  const sorted = todos
    .sort((a, b) => a.id - b.id)
    .sort((a, b) => a.done - b.done);

  return sorted;
};

export default sortTodos;
