window.ResultBox = React.createClass({
  render: function() {
    var property = this.props.property;
    var photo = property.photos[0].replace('120x90', '240x180');
    return (
      <div className="panel panel-default" onClick={this.selectProperty} >
        <div className="panel-body">
          <img className="col-md-5" src={"http://mr0.homeflow.co.uk/" + photo} />
          <div className="col-md-7">
            <h3>{property.price}</h3>
          </div>
        </div>
      </div>
    )
  },
  selectProperty: function() {
    this.props.selectProperty(this.props.property);
  }
})
