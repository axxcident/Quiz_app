const express = require('express');
const router  = express.Router();
const headers = require('./headers');

// REGISTER OUR ROUTES -------------------------------

/* GET a redirect page(w3schools). */
router.get('/', function(req, res, next) {
    res.send(200, "Welcome to the API!");
  });
/* POST default handling */
router.post('/post', function(req, res) {
    console.log('post recieved');
    console.log(req.body);
    res.json({ status: '200 OK', content: req.body });
  });
/* URL query a url string and redirect me there */

// ---------------------------------------------------

module.exports = router;