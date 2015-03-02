var router = require('express').Router;
var movies = require('../data/movies');

console.log(movies);

router.get('/', function (req, res) {
    res.json();
});




module.exports = router;


