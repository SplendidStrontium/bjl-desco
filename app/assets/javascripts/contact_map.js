

var map;
$(document).ready(function initialize() {
  var bjlLoc = new google.maps.LatLng(40.7547655,-73.8048775);
  var mapOptions = {
    center: bjlLoc,
    zoom: 13
  };
  map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);
  var marker = new google.maps.Marker({
    position: bjlLoc,
    title: 'B.J. Laura & Son',
    map: map
  });
});

$(document).ready(function() {
  google.maps.event.trigger(map, 'resize');
});

google.maps.event.addDomListener(window, 'load', initialize);




