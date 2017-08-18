// REQUIRED PACKAGES

	// Mongoose NPM
	const mongoose = require("mongoose");
	const uniqueValidator = require("mongoose-unique-validator");

	// Create Schema
	var Schema = mongoose.Schema

	// Create Article Collection Schema
	var ArticleSchema = new Schema({

		title: {
			type: String,
			required: true,
			unique: true
		},

		date: {
			type: String,
			required: true,
			unique: true

		},
		url: {
			type: String,
			required: true,
			unique: true
		},

		author: {
			type: String,
			unique: true
		},
		section: {
			type: String,
			unique: true
		},
		saved: {
			type: Boolean,
			default: false
		}

	});// close ArchicleSchema var

// ACTIVATE MONGOOSE UNIQUE VALIDATOR
ArticleSchema.plugin(uniqueValidator);

ArticleSchema.methods.saveArticle = function() {
	this.saved = true;
	return this.saved;
};// close saveArticle validate funct


// CREATE Article Model using Schema
var Article = mongoose.model("Article", ArticleSchema);

// EXPORT MODEL
module.exports = Article;