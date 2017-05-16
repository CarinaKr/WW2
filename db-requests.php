<?php
require 'database.php';

if($_POST['type']==='operations')
{
	$sql = "SELECT ID, Name, PlaceY,PlaceX,Text FROM usedoperations WHERE Year=".$_POST['year'];
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		// output data of each row
		$results=array();
		while($row = $result->fetch_assoc()) {
			$results[]=$row;
		}
		$json_array = json_encode($results);
	} else {
		//echo "0 results";
	}
	if($json_array!=null)
	{echo $json_array;}
}
if($_POST['type']==='battles')
{
	$sql = "SELECT  Name, PlaceY,PlaceX,Text FROM usedbattles WHERE Date=".$_POST['year'];
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		// output data of each row
		$results=array();
		while($row = $result->fetch_assoc()) {
			$results[]=$row;
		}
		$json_array = json_encode($results);
	} else {
		//echo "0 results";
	}
	if($json_array!=null)
	{echo $json_array;}
}
if($_POST['type']==='divisions-via-operations')
{
	$sql = "SELECT 
			    division.ID,
			    division.Name,
			    division.Truppenstaerke,
			    division.Offizier,
			    usedoperations.PlaceY,
			    usedoperations.PlaceX
			FROM
			    division,
			    usedoperations,
			    zwischentablle_divsion_operation
			WHERE
			    usedoperations.Year =" .$_POST['year']."
			        AND usedoperations.ID = zwischentablle_divsion_operation.Operation_ID
			        AND division.ID = zwischentablle_divsion_operation.Division_ID";
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		// output data of each row
		$results=array();
		while($row = $result->fetch_assoc()) {
			$results[]=$row;
		}
		$json_array = json_encode($results);
	} else {
		//echo "0 results";
	}
	if($json_array!=null)
	{echo $json_array;}
}
if($_POST['type']==='tanks')
{
	$sql = "SELECT 
			    tanks.*, zwischentabelle_division_tanks.Anzahl
			FROM
			    division,
			    tanks,
			    zwischentabelle_division_tanks
			WHERE
			    division.ID =".$_POST['division']."
			        AND division.ID = zwischentabelle_division_tanks.Division_ID
			        AND tanks.Name = zwischentabelle_division_tanks.Typ_ID";
	$result = $conn->query($sql);
	$json_array=null;
	if ($result->num_rows > 0) {
		// output data of each row
		$results=array();
		while($row = $result->fetch_assoc()) {
			$results[]=$row;
		}
// 		$results[]=array('nummer'=>$_POST['nummer']);
// 		$json_array = json_encode($results);
	} 
	$results[]=array('nummer'=>$_POST['nummer']);
	$json_array = json_encode($results);
	if($json_array!=null)
	{echo $json_array;}
}
if($_POST['type']==='ships')
{
	$sql = "SELECT 
			    zwischentabelle_division_ships.Division_ID,zwischentabelle_division_ships.Anzahl, ships.*, shipsclass.*
			FROM
			    zwischentabelle_division_ships,
			    ships,
			    shipsclass
			WHERE
			    zwischentabelle_division_ships.Division_ID = ".$_POST['division']."
			        AND ships.Name = zwischentabelle_division_ships.Ship_Name
			        AND ships.Class = zwischentabelle_division_ships.Ship_Class
        			AND shipsclass.Class=ships.Class";
	$result = $conn->query($sql);
	$json_array=null;
	if ($result->num_rows > 0) {
		// output data of each row
		$results=array();
		while($row = $result->fetch_assoc()) {
			$results[]=$row;
		}
		//$results[]=array('nummer'=>$_POST['nummer']);
		//$json_array = json_encode($results);
	}
	$results[]=array('nummer'=>$_POST['nummer']);
	$json_array = json_encode($results);
	if($json_array!=null)
	{echo $json_array;}
}
