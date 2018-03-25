   function initMap() {
        var ulu = {lat: -34.397, lng: 150.644};
        var map = new google.maps.Map(document.getElementById('map'), 
        {
          position: ulu,
          center: ulu,
          zoom: 8
        });
      }
