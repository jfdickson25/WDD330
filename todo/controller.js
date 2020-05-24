import Model from './model.js';
import Views from './view.js';

export default class Todo {
  constructor(todoId) {
    this.element = document.getElementById(todoId),
      this.Model = new Model();
    this.Views = new Views();
  }

  filterTasks(taskStatus) {
    const todoListFiltered = this.Model.getTasksFiltered(taskStatus);
    console.log(todoListFiltered);
    //this.Views.renderTodoListFiltered(this.element, todoListFiltered);
  }

  showTodoList() {
    const todoList = this.Model.getAllTask();
    this.Views.renderTodoList(this.element, todoList);
  }

  addTask(description) {
    this.Model.addTask(description);
  }

  removeTask(id) {
    this.Model.removeTask(id);
    window.location.reload();
  }

  setComplete(complete, id) {
    this.Model.setComplete(complete, id);
  }
}