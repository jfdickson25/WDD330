
let count = 1;
window.addEventListener('load', () => { 
    fetch('http://swapi.dev/api/people/?page=1')
        .then(result => result.json())
        .then(people => {
            let main = document.querySelector('main');
            main.innerHTML = '';
            people.results.forEach(
                person => {
                    let character = document.createElement('p');
                    character.innerHTML = person.name;
                    character.addEventListener('touchend', () => {
                        console.log(person.url);
                        getCharacterInfo(person.url);
                    })
                    main.append(character);
                }
            )
            
            document.querySelector('footer').innerHTML =
                '<button id="next">Next</button>';
                document.getElementById('next').addEventListener('touchend', () => {
                    changePage(people.next);
                });
        });
});

function changePage(url) {
    fetch(url)
    .then(result => result.json())
    .then(people => {
        let main = document.querySelector('main');
        main.innerHTML = '';
            people.results.forEach(
                person => {
                    let character = document.createElement('p');
                    character.innerHTML = person.name;
                    character.addEventListener('touchend', () => {
                        console.log(person.url);
                        getCharacterInfo(person.url);
                    })
                    main.append(character);
                }
            )

        if (people.previous == null) {
            document.querySelector('footer').innerHTML =
                `<button id="next">Next</button>`
                document.getElementById('next').addEventListener('touchend', () => {
                    changePage(people.next);
                });

        }
        else if (people.next == null) {
            document.querySelector('footer').innerHTML =
                `<button id="previous">Previous</button>`
                document.getElementById('previous').addEventListener('touchend', () => {
                    changePage(people.previous);
                });
        }
        else {
            document.querySelector('footer').innerHTML =
                `<button id="previous">Previous</button>
                <button id="next">Next</button>`
                document.getElementById('previous').addEventListener('touchend', () => {
                    changePage(people.previous);
                });
                document.getElementById('next').addEventListener('touchend', () => {
                    changePage(people.next);
                });
            }
    });
}


function getCharacterInfo(url) {
    fetch(url)
        .then(result => result.json())
        .then(person => {
            document.querySelector('main').innerHTML = '';
            document.querySelector('footer').innerHTML = '';
            document.querySelector('main').innerHTML = `
            <button onclick='refresh()'>Back</button><br>
            <h3>Name:</h3><p>${person.name}</p>
            <h3>Height:</h3><p>${person.height}</p>
            <h3>Mass:</h3><p>${person.mass}</p>
            <h3>Hair Color:</h3><p>${person.hair_color}</p>
            <h3>Eye Color:</h3><p>${person.eye_color}</p>
            <h3>Birth Year</h3><p>${person.birth_year}</p>
            `

        });
}

function refresh() {
    window.location.reload();
}