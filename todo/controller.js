import Model from './model.js';
import Views from './view.js';

export default class Todo {
    constructor(todoId) {
      this.element = document.getElementById(todoId),
      this.Model = new Model();
      this.Views = new Views();
    }

    showTodoList() {
        const todoList = this.Model.getAllTask();
        this.Views.renderTodoList(this.element, todoList);
    }

    addTask(description) {
      this.Model.addTask(description);
      window.location.reload();
    }

    removeTask(id) {
      this.Model.removeTask(id);
      window.location.reload();
    }
}