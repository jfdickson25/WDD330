import Todo from './controller.js';
const controller = new Todo('todo');


 window.addEventListener('load', () => {
   controller.showTodoList();
   otherEventListeners();
 });

 function otherEventListeners() {
    let elementsArray = document.querySelectorAll("img");
    
    elementsArray.forEach(elem => {
        let id = elem.id;

        //for loop where id is equal to local storage id
        document.getElementById(id).addEventListener("touchend", function() {
            if(document.getElementById(id).value) {
                document.getElementById(id).src = './img/unchecked.png';
                document.getElementById(id).value = false;
            }
            else {
                document.getElementById(id).src = './img/checked.png';
                document.getElementById(id).value = true;
            }
        });
    });
 }
