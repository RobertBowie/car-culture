var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
  // res.render('index', { title: 'Express' }); // Change this back later if needed.
});

router.get('/eventprofile', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
});

module.exports = router;
