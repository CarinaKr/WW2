

function popupFenster(url,w,h,s,r) {
	x=100;
	y=100;
popUp1=window.open(url,'win1','width='+ w +',height='+ h +',left=' + x +',top='+ y +',directories=0,status=0,scrollbars='+s +',resizable='+ r + ',menubar=0,locationbar=0')

document.getElementById("text").style.color = "blue";
 

}


function timeline(){
	document.getElementById("val").innerHTML=document.getElementById("slide").value;
   	if(document.getElementById("slide").value==50){
		//document.getElementById("image").src = "platzhalter.png";
		//document.getElementById("ankericon").style.position = "absolute";
		//document.getElementById("ankericon").style.top = "60px";
		//document.getElementById("ankericon").style.left = "60px";
		changeall(ic50);
	}
	else if(document.getElementById("slide").value==0){
		//document.getElementById("image").src = "platzhalter.png";
		//document.getElementById("ankericon").style.position = "relative";
		changeall(ic25);
		
	}
}


function changeall(ic){
	
	changeicons(ic.links,ic.full,ic.id,ic.position,ic.tops,ic.left);
}
function changeicons(linklist,fulllist,id,positionlist,toplist,leftlist){
		document.getElementById("icons").innerHTML = "";
		for (var i = 0; i < fulllist.length; i++) {
		document.getElementById("icons").innerHTML += "<a href="+linklist[i]+">" + fulllist[i]+ "</a>";
		document.getElementById(id[i]).style.position = positionlist[i];
		document.getElementById(id[i]).style.top = toplist[i];
		document.getElementById(id[i]).style.left = leftlist[i];
		}
	}

var wholeDiv=document.getElementById("popup");
var elements=wholeDiv.getElementsByTagName('*');
var backgroundPopup=document.getElementById("background");
var image1Popup=document.getElementById("image1");
var textPupup=document.getElementById("text");
function openPupUp(background,text,image1)
{
	backgroundPopup.src=background;
	image1Popup.src=image1;
	textPupup.innerHTML=text;
	
	wholeDiv.disabled = true;
	wholeDiv.style.visibility='hidden';
	for(var i=0;i<elements.length;i++)
	{
		elements[i].disabled=true;
		wholeDiv.style.visibility='hidden';
	}
	
}
	
	//image icon list
	var ic25 = {
		full:['<img id="ankericon" src="anker.png" alt="Anker" width="72" height="46" border="0" />'],
		links:["javascript:popupFenster('TestSeite.html','700','450',1,1)"],
		id:["ankericon"],
		icon:["anker.png"],
		position:["absolute"],
		tops:["50px"],
		left:["50px"]
		
	}
	var ic50 = {
		full:[['<img id="ankericon1" src="anker.png" alt="Anker" width="72" height="46" border="0" />'],
		['<img id="ankericon2" src="anker.png" alt="Anker" width="72" height="46" border="0" />']],
		links:[["javascript:popupFenster('TestSeite.html','700','450',1,1)"],["javascript:popupFenster('TestSeite.html','700','450',1,1)"]],
		id:[["ankericon1"],["ankericon2"]],
		icon:["anker.png"],
		position:[["absolute"],["absolute"]],
		tops:[["100px"],["200px"]],
		left:[["100px"],["200px"]]
	}
	
changeall(ic25);
openPupUp("platzhalter.png","text XY","platzhalter.png");







