import Todo from './controller.js';
const controller = new Todo('todoList');


 window.addEventListener('load', () => {
   controller.showTodoList();
   otherEventListeners();
   trashEventListeners();
   newTaskEventListener();
   allEventListener();
   finishedEventListener();
   unfinishedEventListener();

   optionsAllEventListener();
   optionsFinishedEventListener();
   optionsUnfinishedEventListener();

 });

 function optionsAllEventListener() {
    document.getElementById('all').addEventListener('touchend', function() {
        document.getElementById('finished').style.backgroundColor = 'white';
        document.getElementById('unfinished').style.backgroundColor = 'white';
        document.getElementById('all').style.backgroundColor = '#5F7D95';
    });
 }

 function optionsFinishedEventListener() {
    document.getElementById('finished').addEventListener('touchend', function() {
        document.getElementById('finished').style.backgroundColor = '#5F7D95';
        document.getElementById('unfinished').style.backgroundColor = 'white';
        document.getElementById('all').style.backgroundColor = 'white';
    });
}

function optionsUnfinishedEventListener() {
    document.getElementById('unfinished').addEventListener('touchend', function() {
        document.getElementById('finished').style.backgroundColor = 'white';
        document.getElementById('unfinished').style.backgroundColor = '#5F7D95';
        document.getElementById('all').style.backgroundColor = 'white';
    });
}

 function allEventListener() {
    document.getElementById('all').addEventListener("touchend", function() {
        controller.showTodoList();
        otherEventListeners();
        trashEventListeners();
    });
}

 function finishedEventListener() {
     document.getElementById('finished').addEventListener("touchend", function() {
         controller.filterTasks(true);
         otherEventListeners();
        trashEventListeners();
     });
 }

 function unfinishedEventListener() {
    document.getElementById('unfinished').addEventListener("touchend", function() {
        controller.filterTasks(false);
        otherEventListeners();
        trashEventListeners();
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
        document.getElementById('task').value = "";
        controller.showTodoList();
        document.getElementById('finished').style.backgroundColor = 'white';
        document.getElementById('unfinished').style.backgroundColor = 'white';
        document.getElementById('all').style.backgroundColor = '#5F7D95';
        otherEventListeners();
        trashEventListeners();
        allEventListener();
        finishedEventListener();
        unfinishedEventListener();
    });
 }

 function otherEventListeners() {

    let elementsArray = document.querySelectorAll('.check');
    
    elementsArray.forEach(elem => {
        let id = elem.id;
        console.log("Element Id: ", id);

        //for loop where id is equal to local storage id
        document.getElementById(id).addEventListener("touchend", function() {
            var element = document.getElementById('desc' + String(id));
            element.classList.toggle("strike");

            console.log("Here is the value: ", document.getElementById(id).alt);
            if(document.getElementById(id).alt == "true") {
                document.getElementById(id).src = './img/unchecked.png';
                controller.setComplete(false, id);
                document.getElementById(id).alt = "false";

            }
            else {
                document.getElementById(id).src = './img/checked.png';
                controller.setComplete(true, id);
                document.getElementById(id).alt = "true"
            }
        });
    });
 }
