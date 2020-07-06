function changeBackground(color) {
    console.log(color);
    localStorage.color = color;
    let elements = document.querySelectorAll('div');
    elements.forEach(element => {
        element.classList.remove('colorPicked');
    });
    const colorPicked = document.getElementById(color);
    colorPicked.classList.add('colorPicked');
}

function currentPreference() {
    const colorPicked = document.getElementById(localStorage.color);
    colorPicked.classList.add('colorPicked');
}