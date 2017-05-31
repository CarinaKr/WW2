//Slider Funktionen
	var slider = new Slider("#ex13");
	sliderValue(slider.getValue());
	
	//Muss noch ausgefüllt werden
	slider.on("slideStop", function(sliderValue){
		
		//1945
		if(sliderValue==6){
			
			
		}
		//1944
		else if(sliderValue==5){
			
			
		}
		//1943
		else if(sliderValue==4){
			
			
		}
		//1942
		else if(sliderValue==3){
			$.post("PHP/db-requests.php",{type:"operations", year:"1942"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1942"},function(data){
				setBattles(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1942"},function(data){
				setDivisions(data);
			});
			
		}
		//1941
		else if(sliderValue==2){
			
			
		}
		//1940
		else if(sliderValue==1){
			
			
		}
		//1939
		else if(sliderValue==0){
			$.post("PHP/db-requests.php",{type:"operations", year:"1939"},function(data){
				setOperations(data);
			});
			$.post("PHP/db-requests.php",{type:"battles", year:"1939"},function(data){
				setBattles(data);
			});
			$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1939"},function(data){
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
		$.post("PHP/db-requests.php",{type:"divisions-via-operations", year:"1939"},function(data){
			setDivisions(data);
		});
			
	}

