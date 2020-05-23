const todoList = [
  {
    id: '0',
    description: 'Wash dishes',
    complete: false
  },
  {
    id: '1',
    description: 'Buy groceries',
    complete: false
  },
  {
    id: '2',
    description: 'Make dinner',
    complete: false
  },
  {
    id: '4',
    description: 'Make the bed',
    complete: true
  }
];

class Model {
  getAllTodo() {
    return todoList;
  }
}

export default Model;