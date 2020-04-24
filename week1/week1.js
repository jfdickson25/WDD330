function initialize() {
    if (localStorage.count == undefined || isNaN(localStorage.count)) {
        localStorage.count = 0;
    }
    console.log('Initialized');
    console.log(localStorage.count);
    document.getElementById('count').innerHTML = localStorage.count;
}
function add() {
    localStorage.count = Number(localStorage.count) + 1;
    document.getElementById('count').innerHTML = localStorage.count;
}

function subtract() {
    if (localStorage.count > 0) {
        localStorage.count = Number(localStorage.count) - 1;
        document.getElementById('count').innerHTML = localStorage.count;
    }
}