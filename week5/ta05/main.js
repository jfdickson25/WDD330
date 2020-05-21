import Hikes from './controller.js';
const controller = new Hikes('hikes');


 window.addEventListener('load', () => {
   controller.showHikeList();
   delay();
 });

 function displayAll() {
  window.location.reload();
 }

 function display0() {
  controller.showHike('Bechler Falls');
  document.getElementById("back").addEventListener('click', displayAll);
 }

 function display1() {
  controller.showHike('Teton Canyon');
  document.getElementById("back").addEventListener('click', displayAll);
}

 function display2() {
  controller.showHike('Denanda Falls');
  document.getElementById("back").addEventListener('click', displayAll);
 }

//Add event listener for one hike
function delay() {
  document.getElementById("0").addEventListener('click', display0);
  document.getElementById("1").addEventListener('click', display1);
  document.getElementById("2").addEventListener('click', display2);

}