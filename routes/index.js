// core mods
// addon mods
const express = require('express');
const {
  requiresAuth
} = require('express-openid-connect');
// custom mods

// use router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// router.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

router.use('/', require('./swagger'));
router.use('/movies', require('./movieRoutes'));
router.use('/users', requiresAuth(), require('./userRoutes'));

// -------------------- //
// E N D   //   C O D E //

// exports
module.exports = router;