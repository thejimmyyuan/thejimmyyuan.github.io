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
	alert(whereValue);
}
function displayResult(){
	alert("beeyetch");
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