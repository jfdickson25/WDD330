import Grocery from './controller.js';
const controller = new Grocery('itemList');


window.addEventListener('load', () => {
   controller.showItemList();
   addItemEventListener();
   editItemEventListener();


   if (!localStorage.color) {
      console.log('No color picked');
      document.querySelector('html').style.backgroundColor = 'grey';
      document.querySelector('body').style.backgroundColor = 'grey';
      localStorage.color = 'grey';
   }
   else {
      document.querySelector('html').style.backgroundColor = localStorage.color;
      document.querySelector('body').style.backgroundColor = localStorage.color;
   }
});

function addItemEventListener() {
   const addButton = document.getElementById('newItem');
   addButton.addEventListener('touchend', function () {
      const name = document.getElementById('name').value;
      const quantity = document.getElementById('quantity').value;
      const category = document.getElementById('category').value;

      var modal = document.getElementById("myModal");	
      modal.style.display = "none";	
      document.getElementById('name').value = '';
      document.getElementById('quantity').value = '';
      controller.addItem(name, quantity, category);
   });
}

function editItemEventListener() {
   const editButton = document.getElementById('editItem');
   editButton.addEventListener('touchend', () => {
      if ((document.getElementById('editName').value != null) && (document.getElementById('editQuantity').value != null)) {
         const name = document.getElementById('editName').value;
         const quantity = document.getElementById('editQuantity').value;
         const id = document.getElementById('editId').value;
         controller.editItem(id, name, quantity);

         document.getElementById(`name${id}`).innerHTML = name;
         document.getElementById(`quantity${id}`).innerHTML = quantity;

         document.getElementById('myModal1').style.display = "none";

      }
   });
}

export function editItemEvent(id) {
   var modal = document.getElementById("myModal1");
   var span = document.getElementsByClassName("close1")[0];

   const editItem = document.getElementById(`edit${id}`);
   editItem.onclick = function () {
      modal.style.display = "block";
      document.getElementById('editName').value = document.getElementById(`name${id}`).innerHTML;
      document.getElementById('editQuantity').value = document.getElementById(`quantity${id}`).innerHTML;
      document.getElementById('editId').value = id;
   }

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
      modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }
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