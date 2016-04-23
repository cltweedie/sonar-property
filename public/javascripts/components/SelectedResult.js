window.SelectedResult = React.createClass({
  render: function() {
    var property = this.props.property;
    return (
      <div>
        <h2>{property.price}</h2>
      </div>
    )
  }
})
