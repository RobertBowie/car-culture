var express = require('express');
var router = express.Router();
var db = require('../data/eventData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
  // res.render('index', { title: 'Express' }); // Change this back later if needed.
});

router.get('/eventData', function(req, res, next) {
  db(null, function(data) {
    res.send(data);
  });
});

router.get('/eventprofile', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
});

module.exports = router;
