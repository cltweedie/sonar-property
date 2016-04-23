window.SearchForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.search}>

        <div className="form-group">
          <label htmlFor="address">Location</label>
          <input type="search"
                 name="address"
                 className="form-control"
                 ref="address"
                 placeholder="Location" />

          <label htmlFor="channel">Channel</label>
          <select name="channel" ref="channel" className="form-control">
            <option value="sales">Sales</option>
            <option value="lettings">Lettings</option>
          </select>

          <label htmlFor="min_price">Min Price</label>
          <input type="number"
                 name="min_price"
                 className="form-control"
                 ref="min_price" />

          <label htmlFor="max_price">Max Price</label>
          <input type="number"
                 name="max_price"
                 className="form-control"
                 ref="max_price" />
        </div>

        <button className="btn btn-default">Search</button>
      </form>
    )
  },
  search: function(e) {
    e.preventDefault();
    this.props.search(this.refs);
  }
})
