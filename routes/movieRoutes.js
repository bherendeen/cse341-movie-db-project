// Core mods
// Addon mods
const express = require('express');
// Custom mods
const movieController = require('../controllers/movieController');
const movieValidation = require('../middleware/movieValidation');

// Use router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// @desc    | Get all movies
// @route   | GET => '/'
router.get('/', movieController.getAllMovies);

// @desc    | Get a single movie
// @route   | GET => '/:movieId'
router.get('/:movieId', movieController.getSingleMovie);

// @desc    | Create a movie w/ validation
// @route   | POST => '/'
router.post('/', movieValidation.validateMovie, movieController.createMovie);

// @desc    | Update a movie w/ validation
// @route   | PUT => '/:movieId'
router.put('/:movieId', movieValidation.validateMovie, movieController.updateMovie);

// @desc    | Delete a movie
// @route   | DELETE => '/:movieId'
router.delete('/:movieId', movieController.deleteMovie);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;