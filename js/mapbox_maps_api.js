"use strict"

mapboxgl.accessToken = mapboxToken;

var mapOptions = new mapboxgl.Map({
    container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
   zoom: 15,
    center: [-98.654406, 29.435944],
});



// passed markerOptions variable into marker to tell it to change options



function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
           return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
//chuys
var  markerOptions = {
    color: "red",
    rotation: 2
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.654406, 29.435944])
    .addTo(mapOptions);

var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat([-96, 37.8])
    .setHTML('Chuy\'s, 8438 TX-151, San Antonio, TX 78245')
    .addTo(mapOptions);
marker.setPopup(popup)
//chuys end
// chick - file
var  markerOptions2 = {
    color: "red",
    rotation: 2
};

var marker2 = new mapboxgl.Marker(markerOptions2)
    .setLngLat([-98.460812, 29.379431])
    .addTo(mapOptions);

var popup2 = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat([-96, 37.8])
    .setHTML('Chick-fil-A, 4110 S New Braunfels Ave, San Antonio, TX 78223')
    .addTo(mapOptions);
marker2.setPopup(popup2)
// chick - file
//Texas Roadhouse
var  markerOptions3 = {
    color: "red",
    rotation: 2
};

var marker3 = new mapboxgl.Marker(markerOptions3)
    .setLngLat([-98.449178, 29.35224])
    .addTo(mapOptions);

var popup3 = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat([-96, 37.8])
    .setHTML('Texas Roadhouse, 2751 SE Military Dr, San Antonio, TX 78223')
    .addTo(mapOptions);
marker3.setPopup(popup3)
//End Texas Roadhouse



geocode("Chuy's, North Interstate 35, San Marcos, TX", mapboxToken).then(function(results) {
     console.log(results);
  });

geocode("Chick-fil-A, 4110 S New Braunfels Ave, San Antonio, TX 78223", mapboxToken).then(function(results) {
     console.log(results);
  });

geocode("Texas Roadhouse, 2751 SE Military Dr, San Antonio, TX 78223", mapboxToken).then(function(results) {
     console.log(results);
  });




















