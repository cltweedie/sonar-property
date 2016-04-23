window.SearchResults = React.createClass({
  render: function() {
    var resultsMarkup = this.props.results.map(function(result) {
      return( <ResultBox property={result}/> );
    });
    return (
      <div>{resultsMarkup}</div>
    )
  }
})
