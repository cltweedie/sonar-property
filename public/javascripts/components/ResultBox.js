window.ResultBox = React.createClass({
  render: function() {
    var property = this.props.property;
    return (
      <div>
        <img src={"http://mr0.homeflow.co.uk/" + property.photos[0]} />
        <h3>{property.price}</h3>
      </div>
    )
  }
})
