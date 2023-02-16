// Core mods
// Addon mods
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { auth } = require('express-openid-connect');
// Custom mods
const connectDB = require('./config/db');

// -------------------- //
// C O N F I G   C O D E //

// Load config
dotenv.config({ path: './config/config.env' });

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SESSION_SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

// Connect to DB
connectDB()

// Run express
const app = express();
// Port
const port = process.env.PORT;

// -------------------- //
// S T A R T    C O D E //

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use(auth(config))
    .use('/', require('./routes'));

// -------------------- //
// E N D   //   C O D E //

// Port listening
app.listen(port, () => {
    console.log(`// >> Server running in ${process.env.NODE_ENV} mode on port: ${port}`);
})