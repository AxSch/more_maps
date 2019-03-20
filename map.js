// setView takes coords latlng, second param is zoomLevel
var map = L.map('map').setView([51.505, -0.09], 11);

var accessToken = "pk.eyJ1IjoiYXhzY2giLCJhIjoiY2p0MDJuYTY5MDkzNDN6cXRzZHNuYXc4ZSJ9.-hDNKmsyjn3ztZhF2zuUCQ"

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(map);

var kewGardenMarker = L.marker([51.474667, -0.295467]).addTo(map)