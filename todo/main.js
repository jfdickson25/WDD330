import Todo from './controller.js';
const controller = new Todo('todo');

// Add event listener for submission of new task then get value and insert it


 window.addEventListener('load', () => {
   controller.showTodoList();
   otherEventListeners();

 });

 function otherEventListeners() {

    document.getElementById('newTask').addEventListener("touchend", function() {
        console.log("Got here");
        controller.addTask(document.getElementById('task').value);
    });

    let elementsArray = document.querySelectorAll('.check');
    
    elementsArray.forEach(elem => {
        let id = elem.id;
        console.log("Element Id: ", id);

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
