var express = require('express');
var bodyParser = require('body-parser');

var moviesController = require('./controllers/movies_controller');

var logger = require('./middleware/logger');

var app = express();

app.use(bodyParser.json());
app.use(logger);

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);   // notice that any one of these with an :id uses req.params.id
app.post('/movies', moviesController.create);    // and you have to use parseInt()
app.put('/movies/:id', moviesController.update);
app.delete('/movies/:id', moviesController.destroy);



var port = 3000;
app.listen(port, function() {
    console.log('listening to aliens on port ', port);
});
