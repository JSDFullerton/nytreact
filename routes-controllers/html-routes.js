
// REQUIRED PACKAGES
var express = require("express");
var router = express.Router();


// MAIN GET ROUTE
router.get("/", function(req, res) {

	res.sendFile(__dirname + "/public/index.html");

});// close GET Route

// EXPORT HTML ROUTES
module.exports = router;