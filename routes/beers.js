var express = require('express');
var router = express.Router();

router.get('/beer/:beer/random', function(req, res, next) {
  request('http://api.brewerydb.com/v2/beer/' + req.params.id + '/beers' + '?key=' + process.env.KEY + '&format=json', function(error, response, body) {
    res.send(JSON.parse(body).data);
  });
});

router.get('/', function(req, res) {
  res.send({ message: 'Yay! API works'});
});

module.exports = router;
