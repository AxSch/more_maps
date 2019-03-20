// setView takes coords latlng, second param is zoomLevel
var map = L.map('map').setView([51.505, -0.09], 11);

var accessToken = "pk.eyJ1IjoiYXhzY2giLCJhIjoiY2p0MDJuYTY5MDkzNDN6cXRzZHNuYXc4ZSJ9.-hDNKmsyjn3ztZhF2zuUCQ"

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(map);

var POI = [
  [51.496389, -0.171944],
  [51.499897, -0.200244],
  [51.474667, -0.295467],
  [51.51746, -0.10009],
  [51.5238, -0.1343],
]
for (let index = 0; index < POI.length; index++) {
  const marker = new L.marker(POI[index]).addTo(map);
}