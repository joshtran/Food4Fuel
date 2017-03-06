import React from 'react';
import { connect } from 'react-redux';


class PackageMap extends React.Component {

  componentDidMount() {

    let self = this;
    loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyByH0c5bxYDZ48BLQ401BBsm4DppG6QNkQ", function() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 49.2827, lng: -123.1207}
      });

      directionsDisplay.setMap(map);
      directionsService.route({
        origin: "909 Burrard Str",
        destination: "188 E 1st Ave Vancouver BC",
        travelMode: 'DRIVING',
        provideRouteAlternatives: true
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
  }

  render() {
    const mapStyle = {width:"100%", height:300};
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <div id="map" style={mapStyle} />
        </div>
      </div>
    );
  }
}

export default connect(null)(PackageMap);


function loadScript(url, callback) {
    // Adding the script tag to the head tag
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Bind event to the callback.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Append script tag
    head.appendChild(script);
}