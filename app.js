// Core mods
// Addon mods
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// Custom mods
const connectDB = require('./config/db');

// -------------------- //
// C O N F I G  C O D E //

// Load config
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB()

// Run express
const app = express();

// Port
const port = process.env.PORT || 8080;

// -------------------- //
// S T A R T    C O D E //

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

// -------------------- //
// E N D   //   C O D E //

// Port listening
app.listen(port, () => {
    console.log(`// >> Server running in ${process.env.NODE_ENV} mode on port: ${port}`);
})