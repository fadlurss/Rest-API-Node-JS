var express = require('express'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    routes = require('./routes/routes_latihan');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/API');

app = express(),
    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", routes)
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);