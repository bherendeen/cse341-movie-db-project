// Core mods
// Addon mods
// Custom mods
const User = require('../models/userModel');

// -------------------- //
// S T A R T    C O D E //

// @desc | GET => Get all users
exports.getAllUsers = (req, res) => {
    /// SWAGGER START ///
    /*
    * #swagger.tags = ['Users']
    * #swagger.summary = 'Get all users'
    * #swagger.description = 'Endpoint used to fetch all users'
    * #swagger.security = [{
            "oAuthSample": [
                "write",
                "read"
            ]
        }] 
    */
    /// SWAGGER END ///
    try {
        User.find()
            .then((allUserData) => {
                res.status(200).send(allUserData);
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving users.'
                });
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | GET => Get a single user
exports.getSingleUser = (req, res) => {
    /// SWAGGER START ///
    /*
    * #swagger.tags = ['Users']
    * #swagger.summary = 'Get single user'
    * #swagger.description = 'Endpoint used to fetch a single user | userId required'
    * #swagger.security = [{
            "oAuthSample": [
                "write",
                "read"
            ]
        }] 
    */
    /// SWAGGER END ///
    try {
        const userId = req.params.userId;
        User.findById(userId)
            .then((singleUserData) => {
                res.status(200).send(singleUserData);
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving the user.'
                });
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | POST => Create a user
exports.createUser = (req, res) => {
    /// SWAGGER START ///
    /*
    * #swagger.tags = ['Users']
    * #swagger.summary = 'Create user'
    * #swagger.description = 'Endpoint used to create a user'
    * #swagger.security = [{
            "oAuthSample": [
                "write",
                "read"
            ]
        }]
    */
    /// SWAGGER END ///
    try {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profileImg: req.body.profileImg,
            isAdmin: req.body.isAdmin
        };
        const user = new User(newUser);
        user
            .save()
            .then((savedUser) => {
                console.log(`User created`);
                res.status(201).send(savedUser);
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Some error occurred while creating the user.'
                    });
                }
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | PUT => Update a user
exports.updateUser = async (req, res) => {
    //// SWAGGER START ///
    /*
    * #swagger.tags = ['Users']
    * #swagger.summary = 'Update user'
    * #swagger.description = 'Endpoint used to update a single user | userId required'
    * #swagger.security = [{
            "oAuthSample": [
                "write",
                "read"
            ]
        }] 
    */
    /// SWAGGER END ///
    try {
        const userId = req.params.userId;
        User.findById(userId)
            .then((user) => {
                user.firstName = req.body.firstName,
                    user.lastName = req.body.lastName,
                    user.username = req.body.username,
                    user.email = req.body.email,
                    user.password = req.body.password,
                    user.profileImg = req.body.profileImg,
                    user.isAdmin = req.body.isAdmin
                return user.save()
            })
            .then((updateResult) => {
                console.log(`User updated`);
                res.status(201).send(updateResult);
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send({
                        message: err.message || 'Some error occurred while updating the user.'
                    });
                }
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | DELETE => Delete a user
exports.deleteUser = (req, res) => {
    /// SWAGGER START ///
    /*
    * #swagger.tags = ['Users']
    * #swagger.summary = 'Delete user'
    * #swagger.description = 'Endpoint used to delete a single user | userId required'
    * #swagger.security = [{
            "oAuthSample": [
                "write",
                "read"
            ]
        }] 
    */
    /// SWAGGER END ///
    try {
        const userId = req.params.userId;
        User.findByIdAndRemove(userId)
            .then(() => {
                console.log(`User deleted`);
                res.status(200).send({
                    message: 'User was deleted.'
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while deleting user.'
                });
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

// -------------------- //
// E N D   //   C O D E //