var App = React.createClass({
  getInitialState: function() {
    return {results: []}
  },
  render: function() {
    return (
      <div>
        <div className="col-md-3">
          <SearchForm search={this.search}/>
        </div>
        <div className="col-md-3">
          <SearchResults results={this.state.results} />
        </div>
      </div>
    )
  },
  search: function(params) {
    var _this = this;
    var address = params['address'].value;
    $.get('http://localhost:9393/search?search[address]=' + address, function(response) {
      console.log(response);
      _this.setState({results: response})
    });
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
