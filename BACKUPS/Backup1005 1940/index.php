<!DOCTYPE html>
<html>
	<head>
		<title>WW2 Navigator</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
		<link rel="stylesheet" type="text/css" href="leaflet/leaflet.css">
		<link rel="stylesheet" type="text/css" href="css/bootstrap-slider.css">
	</head>

	<body>		
		<header>
			<ul class="navibar">
				<li class="navElement"><a class="navBox" href="">Home</a></li>
				<li class="navElement"><a class="navBox" href="">Gallerie</a></li>
				<li class="navElement"><a class="navBox" href="">Options</a></li>
				<li class="navElement"><a class="navBox" href="">About</a></li>
			</ul>
		</header>
		
		<!-- add proper Image -->
		<div id="map"></div>
		<div id="slide">
			<input id="ex13" class="slider" type="text" data-slider-handle="custom" 
				data-slider-min="1939" data-slider-max="1945" 
				data-slider-ticks="[0, 1, 2, 3, 4, 5, 6]" 
				data-slider-ticks-snap-bounds="1" 
				data-slider-ticks-labels='["1939", "1940", "1941", "1942", "1943", "1944", "1945"]' 
				data-slider-value="0" />
		</div>
		<script type="text/javascript" src="bootstrap-slider.js"></script>
		<script type="text/javascript" language="JavaScript" src="slider.js"></script>
		<script type="text/javascript" src="leaflet/leaflet.js"></script>
		<script type="text/javascript" src="map.js"></script>
	</body>
</html>
