const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        description: 'A database to look up movies. Admin able to add, update, and delete.',
        version: '1.0.0',
        title: 'Movie DB'
    },
    host: 'cse341-movie-db-project.onrender.com',
    schemes: ['https'],
    tags: [{
        name: 'Movies',
        description: 'Everything to lookup, add, update, delete movies'
    },
    {
        name: 'Users',
        description: 'Everything to lookup, add, update, delete users. *Authentication required.'
    }
    ],
    securityDefinitions: {
        oAuthSample: {
            type: 'oauth2',
            authorizationUrl: 'https://cse341-movie-db-project.onrender.com/',
            flow: 'implicit',
            scopes: {
                read: 'read your users',
                write: 'modify users in your account'
            }
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);