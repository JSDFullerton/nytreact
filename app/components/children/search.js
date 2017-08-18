// REQUIRE REACT
var React = require("react");
var Results = require("./Results");


// CREATE CHILD COMPONENT - Search

class Search extends React.Component {

	constructor(props) {

		super(props);
		this.state = {query: "", sYear: "", eYear: ""}

	}// close constructor

	// Function to respond to user input
	handleChange(event) {

		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);

	}// close handleChange func

	// User Search Submision (i.e. search button)
	handleSubmit(event) {
		event.preventDefault();

		// Pass search term to Parent (i.e. Main)
		this.props.setQuery(this.state.query, this.state.sYear, this.state.eYear);

		// Reset terms to blank
		this.setState({query: "", sYear: ""}, eYear: "");


	}// close handleSubmit func


	// RENDER CHILD in MAIN
    render() {
        return (

             <div className="panel panel-default">
                 
                 <div className="panel-heading panel-s">
                     <h1 className="panel-title"><i className="fa fa-newspaper-o" aria-hidden="true"></i> Search</h1>
                 </div>
                 
                 <div className="panel-body">
                     <form onSubmit={this.handleSubmit.bind(this)}>
                         <div className="form-group">
                             <label className="text-label"htmlFor="search">Topic</label>
                             <input
                               type="text"
                               className="form-control"
                               id="query"
                               value={this.state.query}
                               onChange={this.handleChange.bind(this)}
                               required
                             />
                         </div>
                        
                         <div className="form-group">
                             <label className="text-label" htmlFor="startYear">Start Year</label>
                             <input
                               type="text"
                               className="form-control"
                               id="sYear"
                               value={this.state.sYear}
                               onChange={this.handleChange.bind(this)}
                               required
                             />
                         </div>
                         
                         <div className="form-group">
                             <label className="text-label" htmlFor="endYear">End Year</label>
                             <input
                               type="text"
                               className="form-control"
                               id="eYear"
                               value={this.state.eYear}
                               onChange={this.handleChange.bind(this)}
                               required
                             />
                         </div>

                         <button type="submit" className="btn btn-warning pull-right" id="searchButton"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search</button>
                     </form>
                 </div>
             </div>
        );// close return func
    }// close render func

};// close search component

// EXPORT COMPONENT TO PARENT
module.exports = Search;



