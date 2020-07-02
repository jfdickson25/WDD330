import {
  Item
} from './item.js';

let item = [];

if (!localStorage.item) {
  localStorage.item = JSON.stringify(item);
}

class Model {

  getAllItems() {
    let items = JSON.parse(localStorage.item);
    return items;
  }

  editItem(id, name, quantity) {
    item = JSON.parse(localStorage.item);
    let itemToAdd = item.find(element => element.id === Number(id));
    let index = item.indexOf(itemToAdd);
    item[index].quantity =  quantity;
    item[index].name = name;
    localStorage.item = JSON.stringify(item);
  }

  addItem(name, quantity, category) {
    item = JSON.parse(localStorage.item);
    if (item.length > 0) {
      let index = (Number(item.length) - 1);
      let lastElement = item[index].id;
      let newItem = new Item(name, quantity, category, lastElement + 1);
      item.push(newItem);
      console.log(item);
      localStorage.item = JSON.stringify(item);
    } else {
      let newItem = new Item(name, quantity, category, 0);
      item.push(newItem);
      console.log(item);
      localStorage.item = JSON.stringify(item);
    }
  }

  removeItem(id) {
    item = JSON.parse(localStorage.item);
    let itemToDelete = item.find(element => element.id === Number(id));
    let index = item.indexOf(itemToDelete);
    item.splice(index, 1);
    localStorage.item = JSON.stringify(item);
    return;
  }

  addOne(id) {
    item = JSON.parse(localStorage.item);
    let itemToAdd = item.find(element => element.id === Number(id));
    let index = item.indexOf(itemToAdd);
    item[index].quantity =  Number(item[index].quantity) + 1;
    localStorage.item = JSON.stringify(item);
  }

  minusOne(id) {
    item = JSON.parse(localStorage.item);
    let itemToSubtract = item.find(element => element.id === Number(id));
    let index = item.indexOf(itemToSubtract);
    item[index].quantity -= 1;
    localStorage.item = JSON.stringify(item);
  }

}

export default Model;