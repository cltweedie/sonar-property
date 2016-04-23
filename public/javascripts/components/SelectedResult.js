window.SelectedResult = React.createClass({
  render: function() {
    var property = this.props.property;
    var photos = '';
    var agencyLogo = '';

    if (property.photos) {
      var bigPhotoSrc = property.photos[0].replace('120x90', '520x390');
      var bigPhoto = <img className="main-image" src={"http://mr0.homeflow.co.uk/" + bigPhotoSrc} />
      photos = property.photos.map(function(photo) {
        return( <img className="side-image" key={photo} src={"http://mr0.homeflow.co.uk/" + photo} /> );
      });
      agencyLogo = <img width="150px" src={"http://mr0.homeflow.co.uk/" + property.agency.agency_logo} />
    }

    var dl = ""
    if (property.property_id) {
      dl = <dl>
              <dt>Property type:</dt>
              <dd>{property.property_type}</dd>
              <dt>Description:</dt>
              <dd>{property.short_description}</dd>
            </dl>
    }
    return (
      <div>
        <div className="col-md-7">
          { bigPhoto ? bigPhoto : ""}
          <h2>{property.price}</h2>
          <p>{property.display_address}</p>

          { dl }
          { agencyLogo }
        </div>
        <div className="col-md-1">
          { photos }
        </div>
      </div>
    )
  }
})
