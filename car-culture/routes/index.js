var express = require('express');
var router = express.Router();
// Link up our mock database for MVP
var db = require('../data/eventData');

/* GET eventprofile page for MVP */
/* Change to login/signup later  */
router.get('/', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
  // res.render('index', { title: 'Express' }); // Change this back later if needed.
});

router.get('/eventData', function(req, res, next) {
  // Make a call to the async db function
  db(null, function(data) {
    res.send(data);
  });
});

router.get('/eventprofile', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
});

module.exports = router;
