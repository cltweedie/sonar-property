var App = React.createClass({
  getInitialState: function() {
    return {results: [], viewProperty: {}}
  },
  render: function() {
    return (
      <div>
        <div className="col-md-3">
          <SearchForm search={this.search}/>
        </div>
        <div className="col-md-3">
          <SearchResults showProperty={this.showProperty} results={this.state.results} />
        </div>
        <div className="col-md-6">
          <SelectedResult property={this.state.viewProperty}/>
        </div>
      </div>
    )
  },
  search: function(params) {
    var _this = this;
    var address = params['address'].value;
    var channel = params['channel'].value;
    var min_price = params['min_price'].value;
    var max_price = params['max_price'].value;
    var url = 'https://sonar-property.herokuapp.com/search?search[address]=' + address +
              '&search[channel]=' + channel + '&search[min_price]=' + min_price +
              '&search[max_price]=' + max_price;

    $.get(url,
      function(response) {
        console.log(response);
        _this.setState({results: response})
    });
  },
  showProperty: function(property) {
    this.setState({viewProperty: property})
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
