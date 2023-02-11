// core mods
// addon mods
const express = require('express');
// custom mods

// use router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

router.use('/movies', require('./movieRoutes'));
router.use('/users', require('./userRoutes'));

// -------------------- //
// E N D   //   C O D E //

// exports
module.exports = router;