// Core mods
// Addon mods
const mongoose = require('mongoose')
// Custom mods

const Schema = mongoose.Schema;

// -------------------- //
// S T A R T    C O D E //

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
});

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = mongoose.model('User', userSchema);
