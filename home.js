/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 15,
    disableDefaultUI: true
  });

  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'Address',
      from: '1PobwJP0VPdMgMQXpQQpEvV4Z9CvneitWC5okWG_D#card:id=2'
    }
  });
  layer.setMap(map);
}
