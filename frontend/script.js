/*const API_URL = "http://localhost:8080/api/movies";

function addMovie() {
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: id.value.trim(),
            name: name.value.trim(),
            description: description.value.trim(),
            rating: rating.value
        })
    })
    .then(res => res.text())
    .then(alert);
}


/*function addMovie() {
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: id.value,
            name: name.value,
            description: description.value,
            rating: rating.value
        })
    })
    .then(res => res.text())
    .then(alert);
}

function getMovie() {
    fetch(`${API_URL}/${searchId.value}`)
        .then(res => res.text())
        .then(data => result.innerText = data);
}

function getAllMovies() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            movieList.innerHTML = "";
            data.slice(0, 4).forEach(movie => {   // limit items
                const div = document.createElement("div");
                div.className = "movie-item";
                div.innerHTML = `
                    <b>${movie.name}</b><br>
                    ⭐ ${movie.rating}
                `;
                movieList.appendChild(div);
            });
        });
}


const API_URL = "http://localhost:8080/api/movies";*/
const API_URL = "https://movie-backend.onrender.com/api/movies";


function addMovie() {

    const movie = {
        id: document.getElementById("id").value.trim(),
        name: document.getElementById("name").value.trim(),
        description: document.getElementById("description").value.trim(),
        rating: document.getElementById("rating").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    })
    .then(res => {
        if (!res.ok) {
            return res.text().then(err => { throw err; });
        }
        return res.json();
    })
    .then(data => {
        alert("Movie added successfully!");
        console.log(data);
    })
    .catch(err => alert(err));
}
function getMovie() {
    const id = document.getElementById("searchId").value.trim();
    const resultBox = document.getElementById("result");

    if (!id) {
        resultBox.innerText = "Please enter Movie ID";
        return;
    }

    fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Movie not found or backend not reachable");
            }
            return response.json();
        })
        .then(data => {
            resultBox.innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            resultBox.innerText = error.message;
        });
}


/*function getMovie() {
    const id = document.getElementById("searchId").value.trim();
    const resultBox = document.getElementById("result");

    if (id === "") {
        resultBox.innerText = "Please enter Movie ID";
        return;
    }

    fetch(`${API_URL}/${id}`)
        .then(res => {
            if (!res.ok) {
                return res.text().then(err => { throw err; });
            }
            return res.json();
        })
        .then(data => {
            resultBox.innerText = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            resultBox.innerText = err;
        });
}
*/

function getAllMovies() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            movieList.innerHTML = "";
            data.slice(0, 4).forEach(movie => {   // limit items
                const div = document.createElement("div");
                div.className = "movie-item";
                div.innerHTML = `
                    <b>${movie.name}</b><br>
                    ⭐ ${movie.rating}
                `;
                movieList.appendChild(div);
            });
        });
}
