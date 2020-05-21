import Model from './model.js';
import Views from './view.js';


export default class Hikes {
  constructor(hikesId) {
    this.element = document.getElementById(hikesId);
    this.Model = new Model();
    this.Views = new Views();
  }

  showHikeList() {
    const hikeList = this.Model.getAllHikes();
    // Teacher solution helped
    this.Views.renderHikeList(this.element, hikeList);
  }

  showHike(name) {
    const hike = this.Model.getHikeByName(name);
    this.Views.renderHikeDetails(this.element, hike);
    console.log(hike);
  }
}