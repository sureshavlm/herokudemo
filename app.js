var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end("Welcome to Heroku cloud app.");
});

app.listen(8080, function() {
	console.log("Server running");
});