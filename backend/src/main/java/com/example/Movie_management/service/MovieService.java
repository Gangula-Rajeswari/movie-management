package com.example.Movie_management.service;


import com.example.Movie_management.model.Movie;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieService {

    /*private final Map<Integer, Movie> movieDB = new HashMap<>();
    private int idCounter = 1;

    // Add Movie
    public Movie addMovie(Movie movie) {
        movie.setId(idCounter++);
        movieDB.put(movie.getId(), movie);
        return movie;
    }

    // Get Movie by ID
    public Movie getMovieById(int id) {
        return movieDB.get(id);
    }

    // Get All Movies (IMPORTANT for browser testing)
    public List<Movie> getAllMovies() {
        return new ArrayList<>(movieDB.values());
    }*/

    private final List<Movie> movies = new ArrayList<>();

    public Movie addMovie(Movie movie) {
        movies.add(movie);
        return movie;
    }

    public Movie getMovieById(int id) {
        return movies.stream()
                .filter(m -> m.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public List<Movie> getAllMovies() {
        return movies;
    }
}
