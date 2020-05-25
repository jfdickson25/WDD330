import { Task } from './task.js';

let task = [];

if(!localStorage.task) {
  localStorage.task = JSON.stringify(task);
}

console.log(localStorage.task);

class Model {
  getAllTask() {
    let tasks = JSON.parse(localStorage.task);
    return tasks;
  }

  getTasksFiltered(status) {
    let tasks = JSON.parse(localStorage.task);
    let filteredList = [];
    tasks.forEach(task => {
      if (task.complete == status) {
        filteredList.push(task);
      }
    });
    
    return filteredList;

  }

  addTask(description) {
    task = JSON.parse(localStorage.task);
    if (task.length > 0) {
      let index = (Number(task.length) - 1);
      let lastElement = task[index].id;
      let newTask = new Task(description, lastElement + 1);
      task.push(newTask);
      console.log(task);
      localStorage.task = JSON.stringify(task);
    }
    else {
      let newTask = new Task(description, 0);
      task.push(newTask);
      console.log(task);
      localStorage.task = JSON.stringify(task);
    }
  }

  removeTask(id) {
    task = JSON.parse(localStorage.task);
    let taskToDelete = task.find(element => element.id === Number(id));
    let index = task.indexOf(taskToDelete);
    task.splice(index, 1);
    localStorage.task = JSON.stringify(task);
    return;
  }

  setComplete(completed, id) {
    task = JSON.parse(localStorage.task);
    let taskToDelete = task.find(element => element.id === Number(id));
    let index = task.indexOf(taskToDelete);
    task[index].complete = completed;
    localStorage.task = JSON.stringify(task);
  }
}

export default Model;