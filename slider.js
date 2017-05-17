//Slider Funktionen
	var slider = new Slider("#ex13");
	sliderValue(slider.getValue());
	
	//Muss noch ausgefüllt werden
	slider.on("slideStop", function(sliderValue){
		
		//1945
		if(sliderValue==6){
			alert("1945");
			
		}
		//1944
		else if(sliderValue==5){
			alert("1944");
			
		}
		//1943
		else if(sliderValue==4){
			alert("1943");
			
		}
		//1942
		else if(sliderValue==3){
			$.post("db-requests.php",{type:"operations", year:"1942"},function(data){
				setOperations(data);
			});
			$.post("db-requests.php",{type:"battles", year:"1942"},function(data){
				setBattles(data);
			});
			$.post("db-requests.php",{type:"divisions-via-operations", year:"1942"},function(data){
				setDivisions(data);
			});
			
		}
		//1941
		else if(sliderValue==2){
			alert("1941");
			
		}
		//1940
		else if(sliderValue==1){
			alert("1940");
			
		}
		//1939
		else if(sliderValue==0){
			$.post("db-requests.php",{type:"operations", year:"1939"},function(data){
			setOperations(data);
			});
			$.post("db-requests.php",{type:"battles", year:"1939"},function(data){
				setBattles(data);
			});
			$.post("db-requests.php",{type:"divisions-via-operations", year:"1939"},function(data){
				setDivisions(data);
			});

			
		}
	});
	
	function sliderValue(sliderValue)
	{
		//1939
		$.post("db-requests.php",{type:"operations", year:"1939"},function(data){
			setOperations(data);
		});
		$.post("db-requests.php",{type:"battles", year:"1939"},function(data){
			setBattles(data);
		});
		$.post("db-requests.php",{type:"divisions-via-operations", year:"1939"},function(data){
			setDivisions(data);
		});

	}

