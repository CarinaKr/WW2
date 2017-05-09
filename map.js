/**
 * 
 */
//create a zoomable map
var map = L.map('map', {
	minZoom: -1,
	maxZoom: 1,
	center: [0, 0],
	zoom: 0,
	 zoomSnap: 0.25,
    crs: L.CRS.Simple
});

var w = 1747,
	h = 1177;

var northWest = map.unproject([0, 0], map.getMaxZoom()-1);
var southEast = map.unproject([w, h], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(northWest, southEast);

var image = L.imageOverlay('Images/platzhalter.png', bounds).addTo(map);

map.setMaxBounds(bounds);


//create popup
var greenIcon = L.icon({
    iconUrl: 'Images/platzhalter.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [26,26], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13,13], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker=L.marker([-150,150], {icon: greenIcon}).addTo(map);

//add popup to marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
