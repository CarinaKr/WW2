/**
 * 
 */

var zOperationsMarker=new Array();
var zBattlesMarker=new Array();
var zDivisionsMarker=new Array();
var zTankDetails=new Array();
var zShipDetails=new Array();
var zDivisionNumbers;
var zTankDetailsNumber;
var zShipDetailsNumber;
var zTankHashmap={};
var zShipHashmap={};
var zOperationsLayer;
var zBattlesLayer;
var zDivisionsLayer;
var zAktuelleDivisions=new Array();
var zPopupString=new Array();		//für die Divisions
var zPopupContainer=new Array();   //Divisions

//create a zoomable map
var map = L.map('map', {
	minZoom: -1,
	maxZoom: 3,
	center: [0, 0],
	zoom: 0,
	 zoomSnap: 0.25,
    crs: L.CRS.Simple
});

var w = 1747*4,
	h = 1177*4;

var northWest = map.unproject([0, 0], map.getMaxZoom()-1);
var southEast = map.unproject([w, h], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(northWest, southEast);

var image = L.imageOverlay('Images/1939sep.png', bounds).addTo(map);

map.setMaxBounds(bounds);

var legend = L.control({position: 'topright'});
	legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML= '<i style="background:#ff6666"></i>UDSSR<br>'+
				   '<i style="background:#660000"></i>Axes<br>'+
				   '<i style="background:#003366"></i>Allies<br>'+
				   '<i style="background-image:url(Images/ArrowIconSmall.png)"></i>Operations<br>'+
				   '<i style="background-image:url(Images/BattleIconSmall.png)"></i>Battles<br>'+
				   '<i style="background-image:url(Images/DivisionIconSmall.png)"></i>Land Divisions<br>'+
				   '<i style="background-image:url(Images/ShipsIconSmall.png)"></i>Navel Divisions<br>';;
    

	return div;
};
legend.addTo(map);

//var mark = L.icon({
//    iconUrl: 'Images/board.png',
//    iconSize:     [10,10], // size of the icon
//    iconAnchor:   [5,5], // point of the icon which will correspond to marker's location
//    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
//});
//
//HelpNodes für Placing
//for(var i=0;i<36;i++)
//{
//	for(var j=0;j<24;j++)
//	{
//		var marker=L.marker([-j*50,i*50],{icon:mark}).addTo(map).bindPopup("x:"+i*50+", y:"+j*50).openPopup();
//	}
//}



var operationIcon = L.icon({
    iconUrl: 'Images/ArrowIcon.png',
    iconSize:     [26,26], // size of the icon
    iconAnchor:   [13,13], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
var battleIcon = L.icon({
    iconUrl: 'Images/BattleIcon.png',
    iconSize:     [26,26], // size of the icon
    iconAnchor:   [13,13], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
var shipsIcon= L.icon({
    iconUrl: 'Images/ShipsIcon.png',
    iconSize:     [26,26], // size of the icon
    iconAnchor:   [13,13], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
var tanksIcon= L.icon({
    iconUrl: 'Images/DivisionIcon.png',
    iconSize:     [26,26], // size of the icon
    iconAnchor:   [13,13], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});

var popupOperations =
{
    'maxWidth': '400',
    'width': '200',
    'className' : 'popupCustom'
}

function setOperations(data)
{
	//alert(data);
	//delete old data
	zOperationsMarker=[];
	if(zOperationsLayer!=null)
	{map.removeLayer(zOperationsLayer);}
	
	//add new data
	var pObject;
	if(data!="")
	{pObject=JSON.parse(data);
		for(var i=0;i<pObject.length;i++)
		{
			var pY=pObject[i].PlaceY;
			var pX=pObject[i].PlaceX;
			zOperationsMarker[i]=L.marker([pY,pX],{icon:operationIcon,rotationAngle:45});
			zOperationsMarker[i].bindPopup("<b>"+pObject[i].Name+"</b><br>" +pObject[i].Text+
					"</div>",popupOperations);
		}
		zOperationsLayer=L.layerGroup(zOperationsMarker).addTo(map);
	}
}
function setBattles(data)
{
	
	zBattlesMarker=[];
	if(zBattlesLayer!=null)
	{map.removeLayer(zBattlesLayer);}
	
	var pObject;
	if(data!="")
	{pObject=JSON.parse(data);
		for(var i=0;i<pObject.length;i++)
		{
			var pY=pObject[i].PlaceY;
			var pX=pObject[i].PlaceX;
			zBattlesMarker[i]=L.marker([pY,pX],{icon:battleIcon,rotationAngle:0});
			zBattlesMarker[i].bindPopup("<b>"+pObject[i].Name+"</b><br>Axis: "+pObject[i].Axis+"</b><br>Allies: "+pObject[i].Allies+"<br>"+ 
					pObject[i].Text+
					"</div>",popupOperations);	
		}
		zBattlesLayer=L.layerGroup(zBattlesMarker).addTo(map);
	}
}

function setDivisions(data)
{
	//alert(data);
//	zDivisionsMarker=[];
//	if(zDivisionsLayer!=null)
//	{map.removeLayer(zDivisionsLayer);}
	
//	zShipDetailsNumber=0;
//	zTankDetailsNumber=0;
//	zShipDetails=[];
//	zTankDetails=[];
	var json=new Array();
	if(data!="")
	{
		json=JSON.parse(data);
		for(q=0;q<json.length;q++)
		{
			zAktuelleDivisions[zDivisionNumbers+q]=json[q];	
		}
		//zAktuelleDivisions=JSON.parse(data);
	}
	for(var i=zDivisionNumbers;i<zDivisionNumbers+json.length;i++)
	{
		var pY=zAktuelleDivisions[i].PlaceY;
		pY=(parseInt(pY)+10-((i%2)*20)).toString();
		var pX=zAktuelleDivisions[i].PlaceX;
		if(i<2)
		{pX=(parseInt(pX)+10).toString();}
		else
		{pX=(parseInt(pX)-10).toString();}
		
		if(zAktuelleDivisions[i].Type=="Land")
		{zDivisionsMarker[i]=L.marker([pY,pX],{icon:tanksIcon,rotationAngle:0}).addTo(map);}
		else if(zAktuelleDivisions[i].Type=="Wasser")
		{zDivisionsMarker[i]=L.marker([pY,pX],{icon:shipsIcon,rotationAngle:0}).addTo(map);}
		
		zPopupContainer[i]=$('<div/>');
		zPopupString[i]="";
		zPopupString[i]="<b>"+zAktuelleDivisions[i].Name+"</b><br><b>Commanded by: "+zAktuelleDivisions[i].Offizier+"</b>" +
						"<br>Consisted of: <br>Ships: ";
		$.post("PHP/db-requests.php",{type:"ships", division:zAktuelleDivisions[i].ID,nummer:i},function(ships){
			
			//alert(ships);
			var pShips=new Array();
			if(ships!="")
			{
				pShips=JSON.parse(ships);
			}
			var pDivNum=parseInt(pShips[pShips.length-1].nummer);
			
			for(j=zShipDetailsNumber;j<zShipDetailsNumber+pShips.length-1;j++)
			{
				var k=j-zShipDetailsNumber;
				var latlng=zDivisionsMarker[pDivNum].getLatLng();
				zShipDetails[j]=L.popup(popupOperations).setLatLng(latlng);
				zShipDetails[j].setContent("<b>"+pShips[k].Name+"</b>"+
										"<br> Class: "+pShips[k].Class+
										"<br> Type: "+pShips[k].Type+
										"<br> Nation: "+pShips[k].Nation+
										"<br> Year of Launch: "+pShips[k].Year_of_Launch+
										"<br> Fate: "+pShips[k].Fate+
										"<br> Displacement: "+pShips[k].Displacement+" tons"+
										"<br> Length: "+pShips[k].Length+" meter"+
										"<br> Beam: "+pShips[k].Beam+" meter"+
										"<br> Speed: "+pShips[k].Speed+" knots"+
										"<br> Crew: "+pShips[k].Crew+
										"<br> Armor: "+pShips[k].Armor+" mm"+
										"<br> Main: "+pShips[k].Main);
				zPopupString[pDivNum]+="<br><a href='#' class='Link_Ship"+pDivNum+""+j+"'>"+pShips[k].Name+" of "+pShips[k].Class+"-class</a>";
				zShipHashmap['Link_Ship'+pDivNum+""+j]=j.toString();
				zPopupContainer[pDivNum].on('click','.Link_Ship'+pDivNum+""+j,function(){
//					var test0=this.className;
//					var test=zShipHashmap[this.className];
					zShipDetails[zShipHashmap[this.className]].openOn(map);
				});
			  }
			zShipDetailsNumber+=pShips.length-1;
			
			zPopupString[pDivNum]+="<br>Tanks: ";
			$.post("PHP/db-requests.php",{type:"tanks", division:zAktuelleDivisions[pDivNum].ID,nummer:pDivNum},function(tanks)
			{
				var pTanks=new Array();
				if(tanks!="")
				{pTanks=JSON.parse(tanks);}
				var pDivNum=parseInt(pTanks[pTanks.length-1].nummer);
				
				for(k=zTankDetailsNumber;k<zTankDetailsNumber+pTanks.length-1;k++)
				{
					var l=k-zTankDetailsNumber;
					var latlng=zDivisionsMarker[pDivNum].getLatLng();
					zTankDetails[k]=L.popup(popupOperations).setLatLng(latlng);
					zTankDetails[k].setContent("<b>"+pTanks[l].Name+"</b>"+
											"<br> Primary Role: "+pTanks[l].Primary_Role+
											"<br> Nation: "+pTanks[l].Nation+
											"<br> Designed: "+pTanks[l].Designed+
											"<br> No. build: "+pTanks[l].No_built+
											"<br> Weight: "+pTanks[l].Weight+
											"<br> Length: "+pTanks[l].Length+
											"<br> Width: "+pTanks[l].Width+
											"<br> Height: "+pTanks[l].Heigth+
											"<br> Crew: "+pTanks[l].Crew+
											"<br> Armor: "+pTanks[l].Armor+
											"<br> Main: "+pTanks[l].Main+
											"<br> Speed: "+pTanks[l].Speed);
					zPopupString[pDivNum]+="<br><a href='#' class='Link_Tank"+pDivNum+""+k+"'>"+pTanks[l].Name+"</a>";
					zTankHashmap['Link_Tank'+pDivNum+k]=k.toString();
					zPopupContainer[pDivNum].on('click','.Link_Tank'+pDivNum+k,function(k){
						zTankDetails[zTankHashmap[this.className]].openOn(map);
					});
				}
				zTankDetailsNumber+=pTanks.length-1;
				
				zPopupString[pDivNum]+="<br>Other: "+zAktuelleDivisions[pDivNum].Truppenstaerke+"</div>";
				zPopupContainer[pDivNum].html(zPopupString[pDivNum]);
				zDivisionsMarker[pDivNum].bindPopup(zPopupContainer[pDivNum][0],popupOperations);
				zDivisionsLayer=L.layerGroup(zDivisionsMarker).addTo(map);	
			});	
		});	
	}
	zDivisionNumbers+=json.length;
	
}

function resetDivisions()
{
	zShipDetailsNumber=0;
	zTankDetailsNumber=0;
	zDivisionNumbers=0;
	zShipDetails=[];
	zTankDetails=[];
	zDivisionsMarker=[];
	zAktuelleDivisions=[];
	if(zDivisionsLayer!=null)
	{map.removeLayer(zDivisionsLayer);}
}

