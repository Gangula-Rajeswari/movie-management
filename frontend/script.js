const API_URL = "https://movie-backend.onrender.com/api/movies";

// ADD MOVIE
function addMovie() {
    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const rating = document.getElementById("rating").value;

    if (!name || !description || !rating) {
        alert("All fields are required");
        return;
    }

    const movie = { name, description, rating };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to add movie");
        return res.json();
    })
    .then(() => {
        alert("Movie added successfully!");
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("rating").value = "";
        getAllMovies();
    })
    .catch(err => alert(err.message));
}

// GET MOVIE BY ID
function getMovie() {
    const id = document.getElementById("searchMovieId").value.trim();
    const resultBox = document.getElementById("searchResult");

    if (!id) {
        resultBox.innerText = "Please enter Movie ID";
        return;
    }

    fetch(`${API_URL}/${id}`)
        .then(res => {
            if (!res.ok) throw new Error("Movie not found");
            return res.json();
        })
        .then(movie => {
            resultBox.innerText =
`ID: ${movie.id}
Name: ${movie.name}
Description: ${movie.description}
Rating: ${movie.rating}`;
        })
        .catch(err => resultBox.innerText = err.message);
}

// GET ALL MOVIES
function getAllMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "Loading...";

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            movieList.innerHTML = "";
            data.slice(0, 4).forEach(movie => {
                const div = document.createElement("div");
                div.className = "movie-item";
                div.innerHTML = `
<b>${movie.name}</b><br>
⭐ ${movie.rating}
                `;
                movieList.appendChild(div);
            });
        })
        .catch(() => {
            movieList.innerHTML = "Failed to load movies";
        });
}

// Load movies on page load
getAllMovies();
