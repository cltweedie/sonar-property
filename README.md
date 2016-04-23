# Sonar Property Search

I was set this tech test by [Homeflow](http://www.homeflow.co.uk), who challenged me to build a property-searching app using their API in under 4 hours.

The brief specifically asked for a single-page app, so I opted to use [React.js](https://facebook.github.io/react/) to keep my JavaScript organised, with a basic [Sinatra](http://www.sinatrarb.com/) server on the back-end to serve up the assets and communicate with the API. My first thought was to use Rails, but I feel this would be overkill for this project as most of the logic is client-side and there's no need to persist any data.

As 4 hours isn't a huge amount of time to build an app, I chose to use [Bootstrap 3](http://getbootstrap.com/) for it's ready-to-go CSS classes, but customised the styling to make it a bit more bespoke.

I limited myself to the 4 hours specified in the brief, but if I had more time, I would do a few things:
* Implement geocoding and integration with Google maps
* Namespace the React components so they aren't on the global scope!
* Add more fields to the search form for number of bedrooms, etc
* Display more information about a property when it is selected
* Allow images to be clicked to be viewed at higher resolution
* Improve the general styling and add some colour
