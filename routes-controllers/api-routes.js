
// REQUIRED PACKAGES
var express = require("express");
var router = express.Router();

// REQUIRED DB MODELS
var Articles = require("../models/articles.js");


// GET ROUTE
router.get("/saved", function(req, res) {

	Article.find({}).exec(function(err, doc) {

		if (err) {
			console.log("ERRO w/ GET ROUTE: ", err);
		}
		else {
			res.send(doc);
		}

	});// close find all funct

});// close GET ROUTE


// POST ROUTE
router.post("/saved", function(req, res) {

	console.log(req.body.NYTArticles);

	Article.create({
		title: req.body.NYTArticles.headline.main,
		date: req.body.NYTArticles.pub_date,
		url: req.body.NYTArticles.web_url
    	author: req.body.NYTArticles.byline.original,
    	section: req.body.NYTArticles.section_name,
    	
	}, function(err) {
		if(err) {
			console.log("ERROR w/ POST ROUTE: ", err);
		}
		else{
			res.send("Saved Search");
		}
	});// close error function

});// close POST route


// EXPORT API ROUTES
module.exports = router;