

function popupFenster(url,w,h,s,r) {
	x=100;
	y=100;
popUp1=window.open(url,'win1','width='+ w +',height='+ h +',left=' + x +',top='+ y +',directories=0,status=0,scrollbars='+s +',resizable='+ r + ',menubar=0,locationbar=0')

}



function timeline(){
	
   	if(document.getElementById("slide").value==50){
		document.getElementById("image").src = "anker.png";
		
	}
	else if(document.getElementById("slide").value==0){
		document.getElementById("image").src = "platzhalter.png";
		
	}
}
/*function showValue(newValue)
{	
	
		if(newValue==50){
		image.src = "anker.png";
		
	}
	else if(newValue==0){
		image.src = "platzhalter.png";
		
	}
}
function stuff(){
	image.src = "anker.png";
}


*/
