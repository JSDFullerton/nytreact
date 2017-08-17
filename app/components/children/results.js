// REQURIED PACKAGES
var React = require("react");

// REQUIRED FILES/HELPERS
var helpers = require("../utils/helpers");


// CREATE CHILD COMPONENT - Results
class Results extends React.Component {

    constructor(props) {
        super(props);
          this.saveArticle = this.saveArticle.bind(this);
          this.state = {NYTArticles: ""};

    }// close constructor

    saveArticle(article) {
                  console.log('inside saveArticle');
                  console.log(article);


                  helpers.postArticle(article).then(function () {
                              console.log("Updated!");

                              // After we've done the post... then get the updated history
                              helpers.getArticles().then(function (response) {
                                  console.log("Current History", response.data);

                                  console.log("History", response.data);

                                  // this.setState({savedArticles: response.data});

                              }.bind(this));
                          }.bind(this));



      }// close saveArticle func

    // Search component's render method
    render() {
      var {NYTArticles} = this.props;
      var resultsDiv;
    	if(NYTArticles.length > 0){
        resultsDiv = (
    	NYTArticles.map(function(article, i) {
            // console.log(article);
            return (
          		<div className="well clearfix" key={i}>
            		<h2><strong>{article.headline.main}</strong></h2>
            		<h5>{article.byline.original}</h5>
            		<h5>{article.section_name}</h5>
            		<h5><strong>Date Published:</strong> {article.pub_date}</h5>
            		<button href="#" className="btn btn-default pull-right" id="{i}" type="button" onClick={() => this.saveArticle(article)}>Save</button>
            		<a href={article.web_url} className="btn btn-default pull-right">View Article</a>

          		</div>
        	);

      	},this)
        )// close resultsDiv
      	} // close if state
      	else{
        resultsDiv = (
          <div className="well">
            <h2><em>Enter search terms to begin...</em></h2>
          </div>
        )
      }

        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"><i className="fa  fa-list-alt"></i> Results</h3>
            </div>
            <div className="panel-body">
              {resultsDiv}
            </div>
          </div>
        );
    }// close render func
};// close Results Component

// EXPORT COMPONENT - (back to Parent)
module.exports = Results;