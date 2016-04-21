var movies = require('../models/movies');

module.exports = {
    index: function(req, res, next) {
        res.status(200).json(movies);
    },
    show: function(req, res, next) {
        var id = parseInt(req.params.id);   // notice that when you have an id on the get request or any other type
        res.status(200).json(movies[id]);   // of request you have to use req.params.id AND use parseInt()
    },
    create: function(req, res, next) {
        movies.push(req.body);
        res.status(200).json(movies);
    },
    update: function(req, res, next) {
        var index = parseInt(req.params.id);
        movies[index] = req.body;
        res.status(200).json(movies[index]);
    },
    destroy: function(req, res, next) {
        var index = parseInt(req.params.id);
        movies.splice(req.params.id, 1);
        req.status(200).json(movies);
    }
};
