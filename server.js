
// REQUIRED PACKAGES
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// ACTIVATE EXPRESS & DEFINE PORT
	var app = express();
	var PORT = process.env.PORT || 8080;

// Designate Public & Static Assets
	app.use(express.static(process.cwd() + "/public"));

// Activate Logger/Morgan
	app.use(logger('dev'));

// Activate Body-Parser
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());


// Have Mongoose use built-in JS ES6 Promises
mongoose.Promise = Promise;


// CONNECT TO MongoDB w/ Mongoose
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

	// SHOW DB CONNECTION ERRORS
	db.on("error", function(error) {
  		console.log("Mongoose Error: ", error);
	});

	// DB CONNECTION SUCCESS
	db.once("open", function() {
  		console.log("Mongoose connection successful.");
	});


// ROUTES
var htmlRoutes = require("./routes/html-routes.js");
var apiRoutes = require("./routes/api-routes.js");

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


// ACTIVATE SERVER
app.listen(PORT, function() {
	console.log("SERVER LISTENING on: ", PORT);
});