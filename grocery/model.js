import {
  Item
} from './item.js';

let item = [];

if (!localStorage.item) {
  localStorage.item = JSON.stringify(item);
}

class Model {

  getBreakfastItems() {
    let breakfastItems = [];
    const items = JSON.parse(localStorage.item);
    items.forEach(item => {
      if (item.category == 'breakfast') {
        breakfastItems.push(item);
      }
    });

    return breakfastItems;
  }

  getLunchItems() {
    let lunchItems = [];
    const items = JSON.parse(localStorage.item);
    items.forEach(item => {
      if (item.category == 'lunch') {
        lunchItems.push(item);
      }
    });

    return lunchItems;
  }

  getDinnerItems() {
    let dinnerItems = [];
    const items = JSON.parse(localStorage.item);
    items.forEach(item => {
      if (item.category == 'dinner') {
        dinnerItems.push(item);
      }
    });

    return dinnerItems;
  }

  getSnacksItems() {
    let snacksItems = [];
    const items = JSON.parse(localStorage.item);
    items.forEach(item => {
      if (item.category == 'snacks') {
        snacksItems.push(item);
      }
    });

    return snacksItems;
  }

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