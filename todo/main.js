import Todo from './controller.js';
const controller = new Todo('todo');

// Add event listener for submission of new task then get value and insert it


 window.addEventListener('load', () => {
   controller.showTodoList();
   otherEventListeners();
   trashEventListeners();
   newTaskEventListener();

 });

 function trashEventListeners() {
    let elementsArray = document.querySelectorAll('.trashImg');
    elementsArray.forEach(elem => {
        let id = elem.id;
        console.log("Element Id: ", id);

        //for loop where id is equal to local storage id
        document.getElementById(id).addEventListener("touchend", function() { 
            let index = id.split('h')[1];
            controller.removeTask(index);
        });
    });
 }

 function newTaskEventListener() {
    document.getElementById('newTask').addEventListener("touchend", function() {
        controller.addTask(document.getElementById('task').value);
    });
 }

 function otherEventListeners() {

    let elementsArray = document.querySelectorAll('.check');
    
    elementsArray.forEach(elem => {
        let id = elem.id;
        console.log("Element Id: ", id);

        //for loop where id is equal to local storage id
        document.getElementById(id).addEventListener("touchend", function() {
            if(document.getElementById(id).value) {
                document.getElementById(id).src = './img/unchecked.png';
                controller.setComplete(false, id);
            }
            else {
                document.getElementById(id).src = './img/checked.png';
                controller.setComplete(true, id);
            }
        });
    });
 }
