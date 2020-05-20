import Hikes from './controller.js';
//on load grab the array and insert it into the page
const controller = new Hikes('hikes');
window.addEventListener('load', () => {
  controller.showHikeList();
});