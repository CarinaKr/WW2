<?php
require 'database.php';

if($_POST['type']==='operations')
{
	$sql = "SELECT ID, Name, PlaceY,PlaceX,Text FROM UsedOperations WHERE Year=".$_POST['year'];
	$result = $conn->query($sql);
	$json_array=null;
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
	$sql = "SELECT  Name, PlaceY,PlaceX,Text,Axis,Allies FROM UsedBattles WHERE Date=".$_POST['year'];
	$result = $conn->query($sql);
	$json_array=null;
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
			    Division.ID,
			    Division.Name,
			    Division.Truppenstaerke,
			    Division.Offizier,
				Division.Type,
			    UsedOperations.PlaceY,
			    UsedOperations.PlaceX
			FROM
			    Division,
			    UsedOperations,
			    ZwischenTabelle_Divsion_Operation
			WHERE
			    UsedOperations.Year =" .$_POST['year']."
			        AND UsedOperations.ID = ZwischenTabelle_Divsion_Operation.Operation_ID
			        AND Division.ID = ZwischenTabelle_Divsion_Operation.Division_ID";
	$result = $conn->query($sql);
	$json_array=null;
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
if($_POST['type']==='divisions-via-battles')
{
	$sql = "SELECT
			    Division.ID,
			    Division.Name,
			    Division.Truppenstaerke,
			    Division.Offizier,
				Division.Type,
			    UsedBattles.PlaceY,
			    UsedBattles.PlaceX
			FROM
			    Division,
			    UsedBattles,
			    Zwischentabelle_Division_Battle
			WHERE
			    UsedBattles.Date =" .$_POST['year']."
			        AND UsedBattles.Name = Zwischentabelle_Division_Battle.Battle_Name
			        AND Division.ID = Zwischentabelle_Division_Battle.Division_ID;";
	$result = $conn->query($sql);
	$json_array=null;
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
			    Tanks.*, ZwischenTabelle_Division_Tanks.Anzahl
			FROM
			    Division,
			    Tanks,
			    ZwischenTabelle_Division_Tanks
			WHERE
			    Division.ID =".$_POST['division']."
			        AND Division.ID = ZwischenTabelle_Division_Tanks.Division_ID
			        AND Tanks.Name = ZwischenTabelle_Division_Tanks.Typ_ID";
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
			    ZwischenTabelle_Division_Ships.Division_ID,ZwischenTabelle_Division_Ships.Anzahl, Ships.*, ShipsClass.*
			FROM
			    ZwischenTabelle_Division_Ships,
			    Ships,
			    ShipsClass
			WHERE
			    ZwischenTabelle_Division_Ships.Division_ID = ".$_POST['division']."
			        AND Ships.Name = ZwischenTabelle_Division_Ships.Ship_Name
			        AND Ships.Class = ZwischenTabelle_Division_Ships.Ship_Class
        			AND ShipsClass.Class=Ships.Class";
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

if($_POST['type']==='shipsAll')
{
	$sql = "SELECT 
				    *
				FROM
				    Ships,
				    ShipsClass
				WHERE
				    Ships.Class = ShipsClass.Class";
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
	
	$json_array = json_encode($results);
	if($json_array!=null)
	{echo $json_array;}
}


