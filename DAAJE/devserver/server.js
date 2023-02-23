// BASE SERVER SETUP
// =============================================================================

// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const router     = require('../../../../Projects/serverapp/routes/routes');
/* const cors       = require('cors');
const proxy      = require('express-http-proxy') */


// all static served content declared here

app.use(express.static('public'));

//decomment to use proxy
//app.use('/**path', proxy('http://localhost:8080'));

//  Try to allow all CORS
// app.use(cors());


//parsing for middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all of our routes will be prefixed with /api/v1
app.use('/api/v1', router);

// <===== Export the ready server =====>

module.exports = app;