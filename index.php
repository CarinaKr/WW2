<!DOCTYPE html>
<html>

	<?php include 'head.php';?>

	<body>		
		<?php include 'header.php';	?>
		
		<img id="mapBorder" alt="mapBorder" src="Images/OldPaperMap.jpg">
<<<<<<< HEAD
		<img id="mapBorderTop" alt="mapBorderTop" src="Images/OldPaperMapTop.png">
		<img id="mapBorderRight" alt="mapBorderTop" src="Images/OldPaperMapTop.png">
=======
>>>>>>> d54ff49cc6c32f1703a4babde981232fa8b8289f
		<div id="map"></div>
		<div id="slide">
			<input id="ex13" class="slider" type="text" data-slider-handle="custom" 
				data-slider-min="1939" data-slider-max="1945" 
				data-slider-ticks="[0, 1, 2, 3, 4, 5, 6]" 
				data-slider-ticks-snap-bounds="1" 
				data-slider-ticks-labels='["1939", "1940", "1941", "1942", "1943", "1944", "1945"]' 
				data-slider-value="0" />
		</div>
		
		<!-- Slider -->
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="bootstrap-slider.js"></script>
		<!-- Map -->
		<script type="text/javascript" src="leaflet/leaflet.js"></script>
		<script type="text/javascript" src="rotationMarker.js"></script>
		<script type="text/javascript" src="map.js"></script>
		<script type="text/javascript" language="JavaScript" src="slider.js"></script>
	</body>
</html>
