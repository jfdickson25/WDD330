import { Item } from './item.js';

let item = [];

if(!localStorage.item) {
  localStorage.item = JSON.stringify(item);
}

class Model {

    addItem(name, quantity, category) {
        item = JSON.parse(localStorage.item);
        if (item.length > 0) {
          let index = (Number(item.length) - 1);
          let lastElement = item[index].id;
          let newItem = new Item(name, quantity, category, lastElement + 1);
          item.push(newItem);
          console.log(item);
          localStorage.item = JSON.stringify(item);
        }
        else {
          let newItem = new Item(name, quantity, category, 0);
          item.push(newItem);
          console.log(item);
          localStorage.item = JSON.stringify(item);
        }
      }

}

export default Model;