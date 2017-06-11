<!DOCTYPE html>
<html>

	<?php include 'PHP/head.php'; ?>

	<body>		
		<?php include 'PHP/header.php';	?>
		
	    <img id="mapBorder" alt="mapBorder" src="Images/OldPaperMap.jpg">
		<img id="mapBorderTop" alt="mapBorderTop" src="Images/OldPaperMapTop.png">
		<img id="mapBorderRight" alt="mapBorderRight" src="Images/OldPaperMapRight.png">
		<img id="mapBorderBottom" alt="mapBorderBottom" src="Images/OldPaperMapBottom.png">
		<img id="mapBorderLeft" alt="mapBorderLeft" src="Images/OldPaperMapLeft.png">
		<div id="map"></div>
		<div id="slide">
			<input id="ex13" class="slider" type="text" data-slider-handle="custom" 
				data-slider-min="1939" data-slider-max="1945" 
				data-slider-ticks="[0, 1, 2, 3, 4, 5, 6]" 
				data-slider-ticks-snap-bounds="1" 
				data-slider-selection="none"
				data-slider-ticks-labels='["1939", "1940", "1941", "1942", "1943", "1944", "1945"]' 
				data-slider-value="0" />
		</div>
		
		<!-- Slider -->
		<script type="text/javascript" src="JavaScript/jquery.js"></script>
		<script type="text/javascript" src="JavaScript/bootstrap-slider.js"></script>
		<!-- Map -->
		<script type="text/javascript" src="leaflet/leaflet.js"></script>
		<script type="text/javascript" src="JavaScript/rotationMarker.js"></script>
		<script type="text/javascript" src="JavaScript/map.js"></script>
		<script type="text/javascript" language="JavaScript" src="JavaScript/slider.js"></script>
	</body>
</html>
