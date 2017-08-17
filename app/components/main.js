
// REQUIRED NPM PACKAGES
var React = require("react");

// REEQUIRED CHILD FILES/COMPONENTS
var Search = require("./children/search");
var Saved = require("./children/saved");
var Results = require("./children/results");

// REQUIRED HELPER FUNCTIONS
var helpers = require("./utils/helpers");


// CREATE MAIN COMPONENT
class Main extends React.Component {

 	constructor(props) {
    	super(props);
    	this.state = {queryTerm: "", querySYear: "", queryEYear: "", NYTArticles: "",savedArticles: []}
  	}
 
  // Get History when pg. renders
    componentDidMount() {
        // Get the latest history.
        helpers.getArticles().then(function (response) {
            console.log(response);
            if (response !== this.state.articles) {
                console.log("Saved Articles", response.data);
                this.setState({savedArticles: response.data});
            }
        }.bind(this));
    }

    // IF COMPONENT CHANGES (i.e. if a search is entered)
    componentDidUpdate() {

        // Run the query for the address
        helpers.runQuery(this.state.queryTerm,this.state.querySYear,this.state.queryEYear).then(function (NYTData) {
            if (NYTData !== this.state.NYTArticles) {
                console.log("NYTData", NYTData.docs);
                this.setState({NYTArticles: NYTData.docs});

            }// close runQuery funct

        }.bind(this));

    }// close componentDidUpdate funct

    // FUNCTION for children to update parent
	setQuery(query,sYear, eYear) {
	    this.setState({
	    	queryTerm: query,
	        querySYear: sYear,
	        queryEYear: eYear

	    });
	  };// close setQuery func


  	// RENDER PAGE
  	render() {
    	return (
    		<div>
        		{/*Jumbotron*/}
        		<nav className="navbar navbar-default">
 					<div className="container-fluid">
   						<div className="navbar-header">
      						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        					<span className="sr-only">Toggle navigation</span>
        					<span className="icon-bar"></span>
        					<span className="icon-bar"></span>
        					<span className="icon-bar"></span>
      						</button>
      						<a className="navbar-brand" href="#">NYT-React</a>
    					</div>

    				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      					<ul className="nav navbar-nav navbar-right">
        					<li><a href="#">Search</a></li>
        					<li><a href="#">Saved Articles</a></li>
      					</ul>
    				</div>
  					</div>
				</nav>

				<div className='container'>
	  				<div className="row">
	  					<div className="jumbotron jumbo text-center">
	    					<h2><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
	    					<p>Search for and save articles of interest.</p>
	  					</div>
					</div>
	          
	          		<div className="row">
	            		<Search setQuery={this.setQuery.bind(this)}/>
	          		</div>
	          		<div className="row">
	            		<Results NYTArticles={this.state.NYTArticles}/>
	          		</div>
	          		<div className="row">
	            		<Saved articles={this.state.savedArticles}/>
	          		</div>
	        	</div>
      		</div>

    	);// close return
  	}// close render func
}


// EXPORT PARENT COMPONENT TO CHILDREN
module.exports = Main;
