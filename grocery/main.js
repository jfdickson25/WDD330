import Grocery from './controller.js';
const controller = new Grocery('itemList');
 
 
 window.addEventListener('load', () => {
    controller.showItemList();
    addItemEventListener();
 });

 function addItemEventListener() {
     const addButton = document.getElementById('newItem');
     addButton.addEventListener('touchend', function() {
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        const category = document.getElementById('category').value;

        controller.addItem(name, quantity, category);
     });
 }

 export function deleteItemEvent(id) {
    controller.deleteItem(id);
 }

 export function addOne(id) {
   controller.addOne(id);
 }

 export function minusOne(id) {
   controller.minusOne(id)
 }