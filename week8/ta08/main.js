window.addEventListener('load', () => { 
    fetch('https://swapi.dev/api/people/?page=1')
        .then(result => result.json())
        .then(people => {
            console.log(people);
            document.querySelector('main').innerHTML = '';
            people.results.forEach(
                person => {
                    document.querySelector('main').innerHTML +=
                        `<p>${person.name}</p>`;
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
        document.querySelector('main').innerHTML =
                    '';
        people.results.forEach(
            person => {
                document.querySelector('main').innerHTML +=
                    `<p>${person.name}</p>`;
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