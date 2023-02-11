// Core mods
// Addon mods
// Custom mods
const Movie = require('../models/movieModel');

// -------------------- //
// S T A R T    C O D E //

// @desc | GET => Get all movies
exports.getAllMovies = (req, res) => {
    try {
        Movie.find()
            .then((allMovieData) => {
                res.status(200).send(allMovieData);
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving movies.'
                });
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | GET => Get a single movie
exports.getSingleMovie = (req, res) => {
    try {
        const movieId = req.params.movieId;
        Movie.findById(movieId)
            .then((singleMovieData) => {
                res.status(200).send(singleMovieData);
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving the movie.'
                });
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | POST => Create a movie
exports.createMovie = (req, res) => {
    try {
        const newMovie = {
            title: req.body.title,
            imageURL: req.body.imageURL,
            description: req.body.description,
            rating: req.body.rating,
            releaseYear: req.body.releaseYear,
            movieLength: {
                movieHours: req.body.movieHours,
                movieMinutes: req.body.movieMinutes
            },
            genre: {
                action: req.body.genreAction,
                adventure: req.body.genreAdventure,
                animation: req.body.genreAnimation,
                biography: req.body.genreBiography,
                comedy: req.body.genreComedy,
                crime: req.body.genreCrime,
                documentary: req.body.genreDocumentary,
                drama: req.body.genreDrama,
                family: req.body.genreFamily,
                fantasy: req.body.genreFantasy,
                history: req.body.genreHistory,
                horror: req.body.genreHorror,
                music: req.body.genreMusic,
                musical: req.body.genreMusical,
                mystery: req.body.genreMystery,
                romance: req.body.genreRomance,
                sciFi: req.body.genreSciFi,
                shortFilm: req.body.genreShortFilm,
                sport: req.body.genreSport,
                superhero: req.body.genreSuperhero,
                thriller: req.body.genreThriller,
                war: req.body.genreWar,
                western: req.body.genreWestern
            },
            moviePreview: req.body.moviePreview
        };
        const movie = new Movie(newMovie);
        movie
            .save()
            .then((savedMovie) => {
                console.log(`Movie created`);
                res.status(201).send(savedMovie);
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Some error occurred while creating the movie.'
                    });
                }
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | PUT => Update a movie
exports.updateMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        Movie.findById(movieId)
            .then((movie) => {
                movie.title = req.body.title,
                    movie.imageURL = req.body.imageURL,
                    movie.description = req.body.description,
                    movie.rating = req.body.rating,
                    movie.releaseYear = req.body.releaseYear,
                    movie.movieLength.movieHours = req.body.movieHours,
                    movie.movieLength.movieMinutes = req.body.movieMinutes,
                    movie.genre.action = req.body.genreAction,
                    movie.genre.adventure = req.body.genreAdventure,
                    movie.genre.animation = req.body.genreAnimation,
                    movie.genre.biography = req.body.genreBiography,
                    movie.genre.comedy = req.body.genreComedy,
                    movie.genre.crime = req.body.genreCrime,
                    movie.genre.documentary = req.body.genreDocumentary,
                    movie.genre.drama = req.body.genreDrama,
                    movie.genre.family = req.body.genreFamily,
                    movie.genre.fantasy = req.body.genreFantasy,
                    movie.genre.history = req.body.genreHistory,
                    movie.genre.horror = req.body.genreHorror,
                    movie.genre.music = req.body.genreMusic,
                    movie.genre.musical = req.body.genreMusical,
                    movie.genre.mystery = req.body.genreMystery,
                    movie.genre.romance = req.body.genreRomance,
                    movie.genre.sciFi = req.body.genreSciFi,
                    movie.genre.shortFilm = req.body.genreShortFilm,
                    movie.genre.sport = req.body.genreSport,
                    movie.genre.superhero = req.body.genreSuperhero,
                    movie.genre.thriller = req.body.genreThriller,
                    movie.genre.war = req.body.genreWar,
                    movie.genre.western = req.body.genreWestern
                movie.moviePreview = req.body.moviePreview
                return movie.save()
            })
            .then((updateResult) => {
                console.log(`Movie updated`);
                res.status(201).send(updateResult);
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Some error occurred while updating the movie.'
                    });
                }
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | DELETE => Delete a movie
exports.deleteMovie = (req, res) => {
    try {
        const movieId = req.params.movieId;
        Movie.findByIdAndRemove(movieId)
            .then(() => {
                console.log(`Movie deleted`);
                res.status(200).send({
                    message: 'Movie was deleted.'
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while deleting the movie.'
                });
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// -------------------- //
// E N D   //   C O D E //