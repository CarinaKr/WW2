/*
 * TEST DATEI FÜR DATATABLES
 */

$.post("PHP/db-requests.php",{type:"shipsAll"},function(data){
	if(data!=null)
	{
		pObject=JSON.parse(data);
	}
	
	loadTable(pObject);
});

	
	

function loadTable(allData){
	var ships = $('#ships').DataTable({
		aaData: allData,
		autoWidth: false,
//		paging: false,
//		searching: false,
//		info: false,
//		scrollY: true,
//		scrollX: false,
		
		columnDefs: [
			{"width": "5%"}
		],
		
		aoColumns: [
		{
			mData:'Name',
		},
		{
			mData:'Class',
		},
		{
			mData:'Type',
		},
		{
			mData:'Nation',
		},
		{
			mData:'Year_of_Launch',
		},
		{
			mData:'Fate',
		},
//		{
//			mData:'Displacement',
//		},
		{
			mData:'Length',
		},
		{
			mData:'Beam'
		},
		{
			mData:'Speed',
		},
		{
			mData:'Crew',
		},
		{
			mData:'Main',
		},
		{
			mData:'Armour',
		}
	]
	})	
	//$(ships.tables().header()).addClass('bla');
	
}