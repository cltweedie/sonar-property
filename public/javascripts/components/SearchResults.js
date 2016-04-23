window.SearchResults = React.createClass({
  render: function() {
    var _this = this;
    var resultsMarkup = this.props.results.map(function(result) {
      return( <ResultBox selectProperty={_this.selectProperty} key={result.property_id} property={result}/> );
    });
    return (
      <div>{resultsMarkup}</div>
    )
  },
  selectProperty: function(property) {
    this.props.showProperty(property);
  }
})
