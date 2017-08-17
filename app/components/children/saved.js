
// REQUIRE REACT
var React = require("react");

// CREATE CHILD COMPONENT - Saved
class Saved extends React.Component {

    constructor(props) {

        super(props);

    }// close constructor


    // Here we describe Search component's render method
    render() {
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"><i className="fa  fa-list-alt"></i> Saved articles</h3>
            </div>

            <div className="panel-body">

              {this.props.articles.map(function(article, i) {
                return (
              <div className="well" key={i}>
                {article.title}
              </div>
            );
              })}
            </div>
          </div>
        );

    }// close render
};// close Saved Component

// EXPORT CHILD to PARENT
module.exports = Saved;