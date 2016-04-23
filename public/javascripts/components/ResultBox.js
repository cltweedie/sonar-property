window.ResultBox = React.createClass({
  render: function() {
    var property = this.props.property;
    var photo = '';
    if (property.photos.length > 0) {
      photo = property.photos[0].replace('120x90', '240x180');
    }
    return (
      <div className="panel panel-default pointer" onClick={this.selectProperty} >
        <div className="panel-body">
          <img className="col-md-5" src={"http://mr0.homeflow.co.uk/" + photo} />
          <div className="col-md-7">
            <h3>{property.price}</h3>
            <p>{property.display_address}</p>
          </div>
        </div>
      </div>
    )
  },
  selectProperty: function() {
    this.props.selectProperty(this.props.property);
  }
})
