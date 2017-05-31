/**
 * 
 */

var zOperationsMarker=new Array();
var zBattlesMarker=new Array();
var zDivisionsMarker=new Array();
var zTankDetails=new Array();
var zShipDetails=new Array();
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

var image = L.imageOverlay('Images/BlankLand_v2.2.png', bounds).addTo(map);

map.setMaxBounds(bounds);
var mark = L.icon({
    iconUrl: 'Images/handle.jpg',
    iconSize:     [10,10], // size of the icon
    iconAnchor:   [5,5], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
for(var i=0;i<36;i++)
{
	for(var j=0;j<24;j++)
	{
		var marker=L.marker([-j*50,i*50],{icon:mark}).addTo(map).bindPopup("x:"+i*50+", y:"+j*50).openPopup();
	}
}



//create popup
var greenIcon = L.icon({
    iconUrl: 'Images/Year1939TRANS.png',
    iconSize:     [26,26], // size of the icon
    iconAnchor:   [13,13], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

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

var marker=L.marker([-150,150], {icon: greenIcon}).addTo(map);

//add popup to marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

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
	zDivisionsMarker=[];
	if(zDivisionsLayer!=null)
	{map.removeLayer(zDivisionsLayer);}
	zShipDetailsNumber=0;
	zTankDetailsNumber=0;
	zShipDetails=[];
	zTankDetails=[];
	
	zAktuelleDivisions=JSON.parse(data);
	for(var i=0;i<zAktuelleDivisions.length;i++)
	{
		var pY=zAktuelleDivisions[i].PlaceY;
		pY=(parseInt(pY)+13-((i%2)*26)).toString();
		var pX=zAktuelleDivisions[i].PlaceX;
		if(i<2)
		{pX=(parseInt(pX)+13).toString();}
		else
		{pX=(parseInt(pX)-13).toString();}
		
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
			{pShips=JSON.parse(ships);}
			var pNummer=parseInt(pShips[pShips.length-1].nummer);
			
			for(j=zShipDetailsNumber;j<zShipDetailsNumber+pShips.length-1;j++)
			{
				
				zShipDetails[j]=L.popup(popupOperations).setLatLng([pY,pX]);
				zShipDetails[j].setContent("<b>"+pShips[j].Name+"</b>"+
										"<br> Class: "+pShips[j].Class+
										"<br> Nation: "+pShips[j].Nation+
										"<br> Year of Launch: "+pShips[j].Year_of_Launch+
										"<br> Fate: "+pShips[j].Fate+
										"<br> Displacement: "+pShips[j].Displacement+" tons"+
										"<br> Length: "+pShips[j].Length+" meter"+
										"<br> Beam: "+pShips[j].Beam+" meter"+
										"<br> Speed: "+pShips[j].Speed+" knots"+
										"<br> Crew: "+pShips[j].Crew+
										"<br> Armor: "+pShips[j].Armor+" mm"+
										"<br> Main: "+pShips[j].Main);
				zPopupString[pNummer]+="<br><a href='#' class='Link_Ship"+pNummer+""+j+"'>"+pShips[j].Name+" of "+pShips[j].Class+"-class</a>";
				zShipHashmap['Link_Ship'+pNummer+""+j]=j.toString();
				zPopupContainer[pNummer].on('click','.Link_Ship'+pNummer+""+j,function(){
//					var test0=this.className;
//					var test=zShipHashmap[this.className];
					zShipDetails[zShipHashmap[this.className]].openOn(map);
				});
			  }
			
			zPopupString[pNummer]+="<br>Tanks: ";
			$.post("PHP/db-requests.php",{type:"tanks", division:zAktuelleDivisions[pNummer].ID,nummer:pNummer},function(tanks){
				var pTanks=new Array();
				if(tanks!="")
				{pTanks=JSON.parse(tanks);}
				var pNummer=parseInt(pTanks[pTanks.length-1].nummer);
				
				for(k=zTankDetailsNumber;k<zTankDetailsNumber+pTanks.length-1;k++)
				{
					
					zTankDetails[k]=L.popup(popupOperations).setLatLng([pY,pX]);
					zTankDetails[k].setContent("<b>"+pTanks[k].Name+"</b>"+
											"<br> Primary Role: "+pTanks[k].Primary_Role+
											"<br> Nation: "+pTanks[k].Nation+
											"<br> Designed: "+pTanks[k].Designed+
											"<br> No. build: "+pTanks[k].No_built+
											"<br> Weight: "+pTanks[k].Weight+
											"<br> Length: "+pTanks[k].Length+
											"<br> Width: "+pTanks[k].Width+
											"<br> Height: "+pTanks[k].Height+
											"<br> Crew: "+pTanks[k].Crew+
											"<br> Armor: "+pTanks[k].Armor+
											"<br> Main: "+pTanks[k].Main+
											"<br> Speed: "+pTanks[k].Speed);
					zPopupString[pNummer]+="<br><a href='#' class='Link_Tank"+pNummer+""+k+"'>"+pTanks[k].Name+"</a>";
					zTankHashmap['Link_Tank'+pNummer+k]=k.toString();
					zPopupContainer[pNummer].on('click','.Link_Tank'+pNummer+k,function(k){
						zTankDetails[zTankHashmap[this.className]].openOn(map);
					});
				}
				
				zPopupString[pNummer]+="<br>Other: "+zAktuelleDivisions[pNummer].Truppenstaerke+"</div>";
				zPopupContainer[pNummer].html(zPopupString[pNummer]);
				zDivisionsMarker[pNummer].bindPopup(zPopupContainer[pNummer][0],popupOperations);
				zDivisionsLayer=L.layerGroup(zDivisionsMarker).addTo(map);	
			});	
		});	
	}
}


