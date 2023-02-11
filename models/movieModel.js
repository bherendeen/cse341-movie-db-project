// Core mods
// Addon mods
const mongoose = require('mongoose')
// Custom mods

const Schema = mongoose.Schema;

// -------------------- //
// S T A R T    C O D E //

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    movieLength: {
        movieHours: {
            type: Number,
            required: true
        },
        movieMinutes: {
            type: Number,
            required: true
        }
    },
    genre: {
        action: {
            type: Boolean,
            required: true
        },
        adventure: {
            type: Boolean,
            required: true
        },
        animation: {
            type: Boolean,
            required: true
        },
        biography: {
            type: Boolean,
            required: true
        },
        comedy: {
            type: Boolean,
            required: true
        },
        crime: {
            type: Boolean,
            required: true
        },
        documentary: {
            type: Boolean,
            required: true
        },
        drama: {
            type: Boolean,
            required: true
        },
        family: {
            type: Boolean,
            required: true
        },
        fantasy: {
            type: Boolean,
            required: true
        },
        history: {
            type: Boolean,
            required: true
        },
        horror: {
            type: Boolean,
            required: true
        },
        music: {
            type: Boolean,
            required: true
        },
        musical: {
            type: Boolean,
            required: true
        },
        mystery: {
            type: Boolean,
            required: true
        },
        romance: {
            type: Boolean,
            required: true
        },
        sciFi: {
            type: Boolean,
            required: true
        },
        shortFilm: {
            type: Boolean,
            required: true
        },
        sport: {
            type: Boolean,
            required: true
        },
        superhero: {
            type: Boolean,
            required: true
        },
        thriller: {
            type: Boolean,
            required: true
        },
        war: {
            type: Boolean,
            required: true
        },
        western: {
            type: Boolean,
            required: true
        }
    },
    moviePreview: {
        type: String,
        required: true
    }
});

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = mongoose.model('Movie', movieSchema);