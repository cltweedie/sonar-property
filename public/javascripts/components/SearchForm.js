window.SearchForm = React.createClass({
  render: function() {
    return (
      <form className="form-group" onSubmit={this.search}>
        <input type="search" name="address" className="form-control" ref="address" />
        <button className="btn btn-primary">Search</button>
      </form>
    )
  },
  search: function(e) {
    e.preventDefault();
    this.props.search(this.refs);
  }
})
