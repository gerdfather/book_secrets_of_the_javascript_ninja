var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/2_4', function(req, res, next) {
    res.render('2_4', { title: '2_4' });
});

module.exports = router;