var router = require('express').Router;
var movies = require('../data/movies');



router.get('/', function (req, res) {
    res.json({'hi':'hello world'});
});






module.exports = router;


