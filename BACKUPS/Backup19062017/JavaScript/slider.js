//Slider Funktionen
	var slider = new Slider("#ex13");
	sliderValue(slider.getValue());
	
	//Muss noch ausgefüllt werden
	slider.on("slideStop", function(sliderValue){
		
		//1945
		if(sliderValue==6){
			var image = L.imageOverlay('Images/1945sep.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1945"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1945"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1945"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1945"},function(data){
				setDivisions(data);
			});
			
		}
		//1944
		else if(sliderValue==5){
			var image = L.imageOverlay('Images/1944dec.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1944"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1944"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1944"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1944"},function(data){
				setDivisions(data);
			});
			
		}
		//1943
		else if(sliderValue==4){
			var image = L.imageOverlay('Images/1943dec.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1943"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1943"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1943"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1943"},function(data){
				setDivisions(data);
			});
		}
		//1942
		else if(sliderValue==3){
			var image = L.imageOverlay('Images/1942dec.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1942"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1942"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1942"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1942"},function(data){
				setDivisions(data);
			});
			
		}
		//1941
		else if(sliderValue==2){
			var image = L.imageOverlay('Images/1941dec.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1941"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1941"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1941"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1941"},function(data){
				setDivisions(data);
			});
		}
		//1940
		else if(sliderValue==1){
			var image = L.imageOverlay('Images/1940dec.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1940"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1940"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1940"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1940"},function(data){
				setDivisions(data);
			});
		}
		//1939
		else if(sliderValue==0){
			var image = L.imageOverlay('Images/1939sep.png', bounds).addTo(map);
			
			$.post("PHP/db-requests.php",{type:"operations", year:"1939"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1939"},function(data){
				setBattles(data);
			});
			
			resetDivisions();
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1939"},function(data){
				setDivisions(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1939"},function(data){
				setDivisions(data);
			});
			
		}
	});
	
	function sliderValue(sliderValue)
	{
		//1939
		$.post("PHP/db-requests.php",{type:"operations", year:"1939"},function(data){
			setOperations(data);
		});
		$.post("PHP/db-requests.php",{type:"battles", year:"1939"},function(data){
			setBattles(data);
		});
		
		resetDivisions();
		$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1939"},function(data){
			setDivisions(data);
		});
		$.post("PHP/db-requests.php",{type:"divisions-via-battles", year:"1939"},function(data){
			setDivisions(data);
		});
			
	}
	


