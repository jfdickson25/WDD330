let players = false;

function tap(id) {

    player();

    if (players == true) {
        if(document.getElementById(id).innerHTML == '') {
            document.getElementById(id).innerHTML = "<h1>X</h1>";
        }
        else {
            alert("Space already filled");
        }
    }
    else {
        if(document.getElementById(id).innerHTML == '') {
            document.getElementById(id).innerHTML = "<h1>0</h1>";
        }
        else {
            alert("Space already filled");
        }
    }
}

function player() {
    if (players == true) {
        players = false;
    }
    else {
        players = true;
    }
    console.log(players);
}

function reset() {
    for (let i=1; i <= 9; i++) {
        document.getElementById('box' + i).innerHTML = "";
        }
}