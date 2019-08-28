const todos = [
    {todo: 'Feed Dogs', done: true},
  ];
  console.log(todos);
  
  module.exports = {
    getAll,
    getOne,
    create,
    todos,
    deleteOne,
  };
  
  function deleteOne(id) {
    todos.splice(id, 1);
  }
  
  function create(todo) {
    todos.push(todo);
  }
  
  function getOne(id) {
    return todos[id];
  }
  
  function getAll() {
    return todos;
  }