window.SelectedResult = React.createClass({
  render: function() {
    var property = this.props.property;
    if (property.photos) {
      var bigPhotoSrc = property.photos[0].replace('120x90', '480x360');
      var bigPhoto = <img src={"http://mr0.homeflow.co.uk/" + bigPhotoSrc} />
    }
    var dl = ""
    if (property.property_id) {
      dl = <dl>
              <dt>Property type:</dt>
              <dd>{property.property_type}</dd>
            </dl>
    }
    return (
      <div>
        { bigPhoto ? bigPhoto : ""}
        <h2>{property.price}</h2>
        <p>{property.display_address}</p>

        {dl}
      </div>
    )
  }
})
