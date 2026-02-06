package com.example.Movie_management.controller;

import com.example.Movie_management.model.Movie;
import com.example.Movie_management.service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @PostMapping
    public ResponseEntity<?> addMovie(@RequestBody Movie movie) {

        if (movie.getName() == null || movie.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Movie name is required");
        }

        return ResponseEntity.ok(movieService.addMovie(movie));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getMovie(@PathVariable int id) {
        Movie movie = movieService.getMovieById(id);
        if (movie == null) {
            return ResponseEntity.status(404).body("Movie not found");
        }
        return ResponseEntity.ok(movie);
    }

    @GetMapping
    public ResponseEntity<?> getAllMovies() {
        return ResponseEntity.ok(movieService.getAllMovies());
    }
}

