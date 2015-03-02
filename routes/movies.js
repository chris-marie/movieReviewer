var router = require('express').Router();
var movies = require('../data/movies');



router.get('/', function (req, res) {
    res.json({greeting: 'hello world!'});
});




module.exports = router;


