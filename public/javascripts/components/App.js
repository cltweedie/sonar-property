var App = React.createClass({
  render: function() {
    return (
      <div>
        <SearchForm search={this.search}/>
      </div>
    )
  },
  search: function(params) {
    var address = params['address'].value;
    $.get('http://localhost:9393/search?search[address]=' + address, function(response) {
      console.log(response);
    });
    // $.ajax({
    //   url: 'http://index1.homeflow.co.uk/properties?api_key=' + api_key + '&address=' + address,
    //   type: 'GET',
    //   dataType: 'jsonp',
    //   jsonpCallback: 'callback',
    //   success: function(data) {
    //     console.log(data);
    //   }
    // })
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
