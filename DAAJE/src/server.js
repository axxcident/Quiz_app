// BASE SERVER SETUP
// =============================================================================

// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const router     = require('./server/routes');

/* const cors       = require('cors'); */
/* const proxy      = require('express-http-proxy') */

//  Try to allow CORS for redirects... doesn't work...

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all of our backend routes will be prefixed with /api/v1
app.use('/api/v1', router);

// ===== Export the ready server =====

export default app;
