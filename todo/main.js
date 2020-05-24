import Todo from './controller.js';
const controller = new Todo('todoList');

// Add event listener for submission of new task then get value and insert it


 window.addEventListener('load', () => {
   controller.showTodoList();
   otherEventListeners();
   trashEventListeners();
   newTaskEventListener();
   finishedEventListener();
   unfinishedEventListener();

 });

 function finishedEventListener() {
     document.getElementById('finished').addEventListener("touchend", function() {
         controller.filterTasks(true);
     });
 }

 function unfinishedEventListener() {
    document.getElementById('unfinished').addEventListener("touchend", function() {
        controller.filterTasks(false);
    });
}

 function trashEventListeners() {
    let elementsArray = document.querySelectorAll('.trashImg');
    elementsArray.forEach(elem => {
        let id = elem.id;
        console.log("Element Id: ", id);

        //for loop where id is equal to local storage id
        document.getElementById(id).addEventListener("touchend", function() { 
            let index = id.split('h')[1];
            controller.removeTask(index);
            otherEventListeners();
            trashEventListeners();
        });
    });
 }

 function newTaskEventListener() {
    document.getElementById('newTask').addEventListener("touchend", function() {
        controller.addTask(document.getElementById('task').value);
        controller.showTodoList();
        otherEventListeners();
        trashEventListeners();
    });
 }

 function otherEventListeners() {

    let elementsArray = document.querySelectorAll('.check');
    
    elementsArray.forEach(elem => {
        let id = elem.id;
        console.log("Element Id: ", id);

        //for loop where id is equal to local storage id
        document.getElementById(id).addEventListener("touchend", function() {
            console.log("Here is the value: ", document.getElementById(id).alt);
            if(document.getElementById(id).alt == "true") {
                document.getElementById(id).src = './img/unchecked.png';
                controller.setComplete(false, id);
                document.getElementById(id).alt == "false";

            }
            else {
                document.getElementById(id).src = './img/checked.png';
                controller.setComplete(true, id);
                document.getElementById(id).alt == "true"
            }
        });
    });
 }
