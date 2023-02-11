// Core mods
// Addon mods
const express = require('express');
// Custom mods
const userController = require('../controllers/userController');
const userValidation = require('../middleware/userValidation');

// Use router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// @desc    | Get all users
// @route   | GET => '/'
router.get('/', userController.getAllUsers);

// @desc    | Get a single user
// @route   | GET => '/:userId'
router.get('/:userId', userController.getSingleUser);

// @desc    | Create a user w/ validation
// @route   | POST => '/'
router.post('/', userValidation.validateUser, userController.createUser);

// @desc    | Update a user w/ validation
// @route   | PUT => '/:userId'
router.put('/:userId', userValidation.validateUser, userController.updateUser);

// @desc    | Delete a user
// @route   | DELETE => '/:userId'
router.delete('/:userId', userController.deleteUser);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;