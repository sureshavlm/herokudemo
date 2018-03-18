var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end("Welcome to Heroku cloud app.");
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Server running");
});