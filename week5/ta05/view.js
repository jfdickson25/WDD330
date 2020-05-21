// Teacher solution helped me to know how to set up the view
class View {
  renderHikeList(hikeElement, hikes) {
    hikes.forEach(hike => {
      // Teacher solution helped
      hikeElement.appendChild(this.renderOneHike(hike));
    });
  }
  renderHikeDetails(hikeElement, hike) {
      hikeElement.replaceWith(this.renderOneHikeDetails(hike));
  }
  renderOneHike(hikeInfo) {
    const item = document.createElement('li');
    item.classList.add('hike');
    item.setAttribute('data-name', hikeInfo.name);
    item.innerHTML = ` 
    <table id="${hikeInfo.id}">
    <tr>
    <th colspan="2"><h2>${hikeInfo.name}</h2></th>
    </tr>
    <tr>
      <td>
        <img src="${hikeInfo.imgSrc}" alt="${hikeInfo.imgAlt}">
      </td>
      <td>
                    <h3>Distance</h3>
                    <p>${hikeInfo.distance}</p>
                    <h3>Difficulty</h3>
                    <p>${hikeInfo.difficulty}</p>
      </td>
    </tr>
    </table>`;

    return item;
  }

  renderOneHikeDetails(hikeInfo) {
    const item = document.createElement('div');
    item.classList.add('hikeDetails');
    item.setAttribute('data-name', hikeInfo.name);
    item.innerHTML = ` 
    <img src='arrows.png' alt='back' class='back' id='back'>
    <table id="${hikeInfo.id}">
    <tr>
    <th><h2>${hikeInfo.name}</h2></th>
    </tr>
    <tr>
      <td>
        <img class='details' src="${hikeInfo.imgSrc}" alt="${hikeInfo.imgAlt}">
      </td>
    </tr>
    <tr>
      <td style='padding: 10px'>
                    <h3>Distance:</h3>
                    <p>${hikeInfo.distance}</p>
                    <h3>Difficulty:</h3>
                    <p>${hikeInfo.difficulty}</p>
                    <h3>Description:</h3>
                    <p>${hikeInfo.description}</p>
                    <h3>Directions:</h3>
                    <p>${hikeInfo.directions}</p>
      </td>
    </tr>
    </table>`;

    return item;
  }
}

export default View;