import Model from './model.js';
import Views from './view.js';

export default class Todo {
    constructor(todoId) {
      this.element = document.getElementById(todoId),
      this.Model = new Model();
      this.Views = new Views();
    }

    showTodoList() {
        const todoList = this.Model.getAllTodo();
        localStorage.todos = JSON.stringify(todoList);
        this.Views.renderTodoList(this.element, todoList);
    }
}