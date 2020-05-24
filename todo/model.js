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

  addTask(description) {
    task = JSON.parse(localStorage.task);
    let index = (Number(task.length));
    let newTask = new Task(description, index);
    task.push(newTask);
    console.log(task);
    localStorage.task = JSON.stringify(task);
    return index;
  }

  removeTask(id) {
    task = JSON.parse(localStorage.task);
    let taskToDelete = task.find(element => element.id === Number(id));
    let index = task.indexOf(taskToDelete);
    task.splice(index, 1);
    localStorage.task = JSON.stringify(task);
    return;
  }


}

export default Model;