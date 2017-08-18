
// REQUIRED PACKAGES
var express = require("express");
var router = express.Router();
var Article = require("../models/articles");
var path = require("path");

// REQUIRED DB MODELS
var Article = require("../models/articles.js");


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

	var newArticle = req.body;
	newArticle = Article(newArticle);
	newArticle.save(function(err, doc) {

		if (err) {
			console.log("ERROR SAVING ARTICLE: ", err);
		}
		else {
			console.log("ARTICLE SAVED");
		};
	});

});// close POST saved route

// DISPLAY INDEX ON ANY UNSPECIFIED ROUTE
router.get("*", function(req, res, next) {

	res.sendFile(path.resolve(__dirname, "../public.index.html"));

});// close GET UNSPECIFIED funct


// EXPORT API ROUTES
module.exports = router;