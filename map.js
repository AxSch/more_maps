// setView takes coords latlng, second param is zoomLevel
var map = L.map('map').setView([51.505, -0.09], 11);

var accessToken = "pk.eyJ1IjoiYXhzY2giLCJhIjoiY2p0MDJuYTY5MDkzNDN6cXRzZHNuYXc4ZSJ9.-hDNKmsyjn3ztZhF2zuUCQ";

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(map);

var POI = [
  [51.496389, -0.171944, "V&A"],
  [51.499897, -0.200244, "DES"],
  [51.474667, -0.295467, "KEW"],
  [51.51746, -0.10009, "BAR"],
  [51.5238, -0.1343, "GRN"],
  [51.515278, -0.115833, "HUN"]
];

var museumIcon = L.icon({
  iconUrl: 'img/museum-15.svg',
  iconSize: [24, 24],
  iconAnchor: [12, 22],
  popupAnchor: [0, -24], // point from which the popup should open relative to the iconAnchor - should be negative
});

var vaPopup = L.popup({
  minWidth: 250
}).setContent('<img src="img/va.jpg"><a href="https://en.wikipedia.org/wiki/Victoria_and_Albert_Museum"><h3>The V&A Museum</h3></a><p>Photo by Diliff - Own work, CC BY-SA 3.0, <a href="https://commons.wikimedia.org/w/index.php?curid=22422678">licence</a></p>');

var kewPopup = L.popup({
  minWidth: 250
}).setContent('<img src="img/kewGardens.jpg"><a href="https://en.wikipedia.org/wiki/Kew_Gardens"><h3>Kew Gardens</h3></a><p>Photo by Daniel Case - Own work, CC BY-SA 3.0, <a href="https://commons.wikimedia.org/w/index.php?curid=41065588">licence</a></p>');

var barPopup = L.popup({
  minWidth: 250
}).setContent('<img src="img/barts.jpg"><a href="https://en.wikipedia.org/wiki/St_Bartholomew%27s_Hospital"><h3>St Bartholomew&apos;s Hospital</h3></a><p>Photo by w:User:DisillusionedBitterAndKnackered - from english WP, original photo by User:Nevilley replaced by new version from DBaK, CC BY-SA 3.0, <a href="https://commons.wikimedia.org/w/index.php?curid=1657384">licence</a></p>');

var grnPopup = L.popup({
  minWidth: 250
}).setContent('<img src="img/grantMuseum.jpg"><a href="https://en.wikipedia.org/wiki/Grant_Museum_of_Zoology_and_Comparative_Anatomy"><h3>Grant Museum of Zoology and Comparative Anatomy</h3></a><p>Photo by Emoke Denes - kindly granted by the author, CC BY-SA 4.0, <a href="https://commons.wikimedia.org/w/index.php?curid=17592420">licence</a></p>');

var hunPopup = L.popup({
  minWidth: 250
}).setContent('<img src="img/hunterian.jpg"><a href="https://en.wikipedia.org/wiki/Hunterian_Museum_(London)"><h3>Hunterian Museum</h3></a><p>Photo by Emoke Denes - kindly granted by the author, CC BY-SA 4.0, <a href="https://commons.wikimedia.org/w/index.php?curid=60801410">licence</a></p>');

var desPopup = L.popup({
  minWidth: 250
}).setContent('<img src="img/des.jpg"><a href="https://en.wikipedia.org/wiki/Design_Museum"><h3>Design Museum</h3></a><p>Photo Anthony O&apos;Neil, CC BY-SA 2.0, <a href="https://commons.wikimedia.org/w/index.php?curid=70643710">licence</a></p>');

var markersArr = []
for (let index = 0; index < POI.length; index++) {
  markersArr[index] = new L.marker(POI[index], {icon: museumIcon}).addTo(map);
  switch (POI[index][2]) {
    case "V&A":
      markersArr[index].bindPopup(vaPopup);
      break;
    case "DES":
      markersArr[index].bindPopup(desPopup);
      break;
    case "KEW":
      markersArr[index].bindPopup(kewPopup);
      break;
    case "HUN":
      markersArr[index].bindPopup(hunPopup);
      break;
    case "BAR":
      markersArr[index].bindPopup(barPopup);
      break;
    case "GRN":
      markersArr[index].bindPopup(grnPopup);
      break;
  
    default:
      break;
  }
}


// var polyLine = new L.polyline(POI, {color: "#FF69B4", weight: 2}).addTo(map);
// var polygon = new L.polygon(POI, {color: "#FF69B4", weight: 2}).addTo(map);








