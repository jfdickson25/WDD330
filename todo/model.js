import { Task } from './task.js';

let task = [];

let task1 = new Task('Wash dishes', 0);
let task2 = new Task('Buy groceries', 1);
let task3 = new Task('Make dinner', 2);

task.push(task1);
task.push(task2);
task.push(task3);

if(!localStorage.task) {
  localStorage.task = JSON.stringify(task);
}

console.log(localStorage.task);

class Model {
  getAllTask() {
    return JSON.parse(localStorage.task);
  }

  addTask(description) {
    task = JSON.parse(localStorage.task);
    let index = (Number(task.length));
    let newTask = new Task(description, index);
    task.push(newTask);
    console.log(task);
    localStorage.task = JSON.stringify(task);
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