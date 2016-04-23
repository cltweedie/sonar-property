window.SelectedResult = React.createClass({
  render: function() {
    var property = this.props.property;
    if (property.photos) {
      var bigPhotoSrc = property.photos[0].replace('120x90', '480x360');
      var bigPhoto = <img src={"http://mr0.homeflow.co.uk/" + bigPhotoSrc} />
    }
    return (
      <div>
        { bigPhoto ? bigPhoto : ""}
        <h2>{property.price}</h2>
        <p>{property.display_address}</p>
      </div>
    )
  }
})
