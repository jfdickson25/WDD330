import Model from './model.js';
import Views from './view.js';

export default class Grocery {
  constructor(groceryId) {
    this.element = document.getElementById(groceryId);
     this.Model = new Model();
     this.Views = new Views();
  }

  filterBreakfast() {
    const itemList = this.Model.getBreakfastItems();
    this.Views.renderItemList(this.element, itemList);
  }

  filterLunch() {
    const itemList = this.Model.getLunchItems();
    this.Views.renderItemList(this.element, itemList);
  }

  filterDinner() {
    const itemList = this.Model.getDinnerItems();
    this.Views.renderItemList(this.element, itemList);
  }

  filterSnacks() {
    const itemList = this.Model.getSnacksItems();
    this.Views.renderItemList(this.element, itemList);
  }

  showItemList() {
    const itemList = this.Model.getAllItems();
    this.Views.renderItemList(this.element, itemList);
  }

  editItem(id, name, quantity) {
    this.Model.editItem(id, name, quantity);
  }

  addItem(name, quantity, category) {
    console.log("In the controller: Name of Item: ", name, "Quantity: ", quantity);
    this.Model.addItem(name, quantity, category);
    const itemList = this.Model.getAllItems();
    this.Views.renderItemList(this.element, itemList);
  }

  deleteItem(id) {
    this.Model.removeItem(id);
    
    if(localStorage.category == 'all') {
      const itemList = this.Model.getAllItems();
      this.Views.renderItemList(this.element, itemList);
    }
    else if(localStorage.category == 'breakfast'){
      const itemList = this.Model.getBreakfastItems();
      this.Views.renderItemList(this.element, itemList);
    }
    else if(localStorage.category == 'lunch'){
      const itemList = this.Model.getLunchItems();
      this.Views.renderItemList(this.element, itemList);
    }
    else if(localStorage.category == 'dinner'){
      const itemList = this.Model.getDinnerItems();
      this.Views.renderItemList(this.element, itemList);
    }
    else if(localStorage.category == 'snacks'){
      const itemList = this.Model.getSnacksItems();
      this.Views.renderItemList(this.element, itemList);
    }
    
  }

  addOne(id) {
    this.Model.addOne(id);
  }

  minusOne(id) {
    this.Model.minusOne(id);
  }

  
}