const express = require('express');
const router  = express.Router();
const headers = require('./headers');

// REGISTER OUR ROUTES -------------------------------

// Head
router.get('/', function(req, res, next) {
    res.send(200, "Welcome to the API!");
  });
/* POST default handling */
router.post('/post', function(req, res) {
    console.log('post recieved');
    console.log(req.body);
    res.json({ status: '200 OK', content: req.body });
  });

// ----------------------------------------------------

module.exports = router;