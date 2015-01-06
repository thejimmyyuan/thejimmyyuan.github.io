/**
 * @author Jimmy Yuan
 */
var xmlhttp;
function loadXMLDoc(url) {
    
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         
          populateArray();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
var diningAreas = new Array();
function populateArray()
{
	var locations;
	locations = xmlhttp.responseXML.documentElement.getElementsByTagName("location");
	var dining;
	for(i = 0; i<locations.length; i++)
	{
		name = locations[i].getElementsByTagName('name')[0].childNodes[0].nodeValue;
		monday = locations[i].getElementsByTagName('monday')[0].childNodes[0].nodeValue;
		tuesday = locations[i].getElementsByTagName('tuesday')[0].childNodes[0].nodeValue;
		wednesday = locations[i].getElementsByTagName('wednesday')[0].childNodes[0].nodeValue;
		thursday = locations[i].getElementsByTagName('thursday')[0].childNodes[0].nodeValue;
		friday = locations[i].getElementsByTagName('friday')[0].childNodes[0].nodeValue;
		saturday = locations[i].getElementsByTagName('saturday')[0].childNodes[0].nodeValue;
		sunday = locations[i].getElementsByTagName('sunday')[0].childNodes[0].nodeValue;
		
		dining = {};
		dining.name = name;
		dining.monday = monday;
		dining.tuesday = tuesday;
		dining.wednesday = wednesday;
		dining.thursday = thursday;
		dining.friday = friday;
		dining.saturday = saturday;
		dining.sunday = sunday;
		
		diningAreas.push(dining);
	}	
	
}
function check()
{
	var whereValue = document.getElementById("where").value;
	if(whereValue == -1)
	{
		displayResult();
	}
}
var places = new Array;
function displayResult(){
	places = [];
	clearDiv("results");
	var dayValue = document.getElementById("day").value;
	var timeValue = document.getElementById("time").value;

	
	for(i = 0; i < diningAreas.length; i++)
	{
		var hours = diningAreas[i][dayValue].split(",");
		for(z = 0; z <hours.length;z++)
		{
			if(timeValue == hours[z])
			{
				places.push(diningAreas[i]);
			}
		}
		
	}
	list = document.createElement("ul");
	list.className = "collection with-header";
	header = document.createElement("li");
	header.className = "collection-header";
	header.innerHTML = "Places which are Open";
	list.appendChild(header);
	
	
	for(k = 0; k<places.length; k++)
	{
		
		
		openPlace = document.createElement("li");
		openPlace.className = "collection-item";
		openPlace.innerHTML = places[k].name;
		list.appendChild(openPlace);
	}
	document.getElementById("results").appendChild(list);
}
function clearDiv(div)
{
	var myNode = document.getElementById(div);
	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}
/*
function showSchedule()
{
	table = document.createElement('table');
	theader = document.createElement('thead');
	trow = document.createElement('tr');
	
	for(i = 0; i < locations.length; i++)
	{
		th = document.createElement(th);
		th.innerHTML = 
	}
	
	
}
	var day = document.getElementById("day");
	var weekday = day.options[day.selectedIndex].value;
	
	var time = document.getElementById("time");
	var timeofDay = time.options[time.selectedIndex].value;
	
	if(timeofDay == -1 && weekday == -1)
	{
		showSchedule();
	}
	else if(location == -1)
	{
		displayResult();
	}	
*/