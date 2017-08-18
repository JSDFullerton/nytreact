// REQUIRED PACKAGES
var axios = require("axios");

// NY TIMES API KEY
var apiKey = "2c24b581b73c4223ad99a961cfaad9db";


// HELPER FUNCTIONS - API calls

module.exports = {

	runQuery(queryTerm, startYear, endYear) {

		console.log(queryTerm);

		// Use ES6 w/ backticks for plugins
		var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${queryTerm}&begin_date=${startYear}0101&end_date=${endYear}0101`;

		return axios.get(queryURL).then(function(NYT) {

			console.log("NYT Response: ", NYT.data.response.docas);

			if (NYT.data.response.docs[0]) {

				return NTY.data.response;

			}// close if state

			else {

				console.log("NO RESULT FOUND IN NY TIMES DB")
				return "";

			}// close else state
		});// close api GET func
	},// close runQuery func

	// GET SAVED ARTICLES FROM MONGO DB
	getArticles() {

		return axios.get("/api/saved");

	},// close getArticles func.

	
	// POST NEW SEARCHED ARTICLEDS TO MONGO DB
	postArticle(Articles) {

		return axios.post("/api/saved", {Articles});
	
	}// close postArticle func

}// close export