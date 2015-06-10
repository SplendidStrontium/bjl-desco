$(document).ready(function initialize() {
  var bjlLoc = new google.maps.LatLng(40.7547655,-73.8048775);
  var mapOptions = {
    center: bjlLoc,
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
    position: bjlLoc,
    title: 'B.J. Laura & Son',
    map: map
  });
});

google.maps.event.addDomListener(window, 'load', initialize);
