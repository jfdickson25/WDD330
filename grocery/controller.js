import Model from './model.js';
import Views from './view.js';

export default class Grocery {
  constructor(groceryId) {
    this.element = document.getElementById(groceryId);
     this.Model = new Model();
     this.Views = new Views();
  }

  showItemList() {
    const itemList = this.Model.getAllItems();
    this.Views.renderItemList(this.element, itemList);
  }

  addItem(name, quantity, category) {
    console.log("In the controller: Name of Item: ", name, "Quantity: ", quantity);
    this.Model.addItem(name, quantity, category);
    const itemList = this.Model.getAllItems();
    this.Views.renderItemList(this.element, itemList);
  }

  deleteItem(id) {
    this.Model.removeItem(id);
    const itemList = this.Model.getAllItems();
    this.Views.renderItemList(this.element, itemList);
  }

  addOne(id) {
    this.Model.addOne(id);
  }

  minusOne(id) {
    this.Model.minusOne(id);
  }

  
}