var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/eventprofile', function(req, res, next) {
  res.render('eventprofile', {title: 'Vehicle Event Profile'});
});

module.exports = router;
