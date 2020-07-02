import Grocery from './controller.js';
const controller = new Grocery('itemList');
 
 
 window.addEventListener('load', () => {
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