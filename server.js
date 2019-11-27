var express = require('express'),
    mysql = require('mysql'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    routes = require('./routes/routes_latihan');

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/API');

// app.js


// First you need to create a connection to the db
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});

app = express(),
    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", routes)
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
