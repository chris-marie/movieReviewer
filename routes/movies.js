var router = require('express').Router();
var movies = require('../data/movies').movies;

router.get('/', function (req, res) {
    if(req.query.page && req.query.page <= 20 && req.query.page >= 1) {
        var startindex = (+req.query.page -1) * 5;
        res.status(200).json(movies.slice(startindex, startindex + 5));
    } else {
        res.status(200).json(movies.slice(0,5));
    }
});


router.get('/:id', function (req, res) {
    var id = movies[req.params.id];
    res.status(200).json(id);
});





module.exports = router;


