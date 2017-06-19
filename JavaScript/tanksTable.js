/*
 * TEST DATEI FÜR DATATABLES
 */

$.post("PHP/db-requests.php",{type:"tanksAll"},function(data){
	if(data!=null)
	{
		pObject=JSON.parse(data);
	}
	
	loadTable(pObject);
});

	
	

function loadTable(allData){
	var ships = $('#tanks').DataTable({
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
			mData:'Nation',
		},
		{
			mData:'Designed',
		},
		{
			mData:'No_built',
		},
		{
			mData:'Weight',
		},
		{
			mData:'Length',
		},
		{
			mData:'Heigth'
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
			mData:'Armor',
		}
	]
	})	
	//$(ships.tables().header()).addClass('bla');
	//$(ships.label()).addClass('labelTable');
}