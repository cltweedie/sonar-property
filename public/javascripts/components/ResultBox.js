window.ResultBox = React.createClass({
  render: function() {
    var property = this.props.property;
    return (
      <div>
        <h3>{property.price}</h3>
      </div>
    )
  }
})
