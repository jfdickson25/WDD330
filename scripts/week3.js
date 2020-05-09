let character = {
    first_name: 'Luke',
    last_name: 'Skywalker',
    age: 20,
    lightsaber_color: 'green'
}

document.getElementById('character').innerHTML = 
'<p> Name: ' + character.first_name + ' ' + character.last_name + '</p>' + 
'<p> Age: ' + character.age + '</p>' +
'<p> Lightsaber Color: <span id="color">' + character.lightsaber_color + '</span> ( <- click on green )</p>';  

const changeColor = (event) => {
    event.target.classList.toggle('highlight');
}
const mouseParagraph = document.getElementById('color');
mouseParagraph.addEventListener('click', changeColor);