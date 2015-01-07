/**
 * @author Jimmy Yuan
 */
var xmlhttp;

function loadXMLDoc(url) {

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
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

function populateArray() {
	var locations;
	locations = xmlhttp.responseXML.documentElement.getElementsByTagName("location");
	var dining;
	for ( i = 0; i < locations.length; i++) {
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

function check() {
	var whereValue = document.getElementById("where").value;
	var dayValueS = document.getElementById("day").value;
	var timeValueS = document.getElementById("time").value;
	if (whereValue == -1) {
		displayResult();
	} else if (dayValueS == -1 && timeValueS == -1) {
		showSchedule();
	}
}

var places = new Array;

function displayResult() {
	places = [];
	clearDiv("results");
	var dayValue = document.getElementById("day").value;
	var timeValue = document.getElementById("time").value;

	for ( i = 0; i < diningAreas.length; i++) {
		var hours = diningAreas[i][dayValue].split(",");
		for ( z = 0; z < hours.length; z++) {
			if (timeValue == hours[z]) {
				places.push(diningAreas[i]);
			}
		}

	}
	list = document.createElement("ul");
	list.className = "collapsible";

	for ( k = 0; k < places.length; k++) {

		openPlace = document.createElement("li");
		
		divTitle = document.createElement("div");
		divTitle.className = "collapsible-header";
		divTitle.innerHTML = "<p>" + places[k].name + "</p>";
		
		divBody = document.createElement("div");
		divBody.className = "collapsible-body";
		divBody.innerHTML = "INFO TBD";
		
		
		openPlace.appendChild(divTitle);
		openPlace.appendChild(divBody);
		
		list.appendChild(openPlace);
	}
	placeTitle = document.createElement("h3");
	placeTitle.innerHTML = "Places which are Open";
	document.getElementById("results").appendChild(placeTitle);
	document.getElementById("results").appendChild(list);
	
	  $(document).ready(function(){
        $('.collapsible').collapsible();
      });
}

function clearDiv(div) {
	var myNode = document.getElementById(div);
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
}

function showSchedule() {
	clearDiv("results");
	var whereValue = document.getElementById("where").value;
	table = document.createElement('table');
	theader = document.createElement('thead');
	trow = document.createElement('tr');
	th = document.createElement('th');
	var e = document.getElementById("where");
	var text = e.options[e.selectedIndex].text;
	th.innerHTML = text;
	th2 = document.createElement('th');
	th2.innerHTML = "Opens";
	th3 = document.createElement('th');
	th3.innerHTML = "Closes";
	trow.appendChild(th);
	trow.appendChild(th2);
	trow.appendChild(th3);
	theader.appendChild(trow);
	tbody = document.createElement('tbody');
	table.appendChild(theader);
	document.getElementById('results').appendChild(table);
	var times = new Array;
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	for ( i = 0; i < diningAreas.length; i++) {
		if (text == diningAreas[i].name) {
			times.push(diningAreas[i].monday.split(","));
			times.push(diningAreas[i].tuesday.split(","));
			times.push(diningAreas[i].wednesday.split(","));
			times.push(diningAreas[i].thursday.split(","));
			times.push(diningAreas[i].friday.split(","));
			times.push(diningAreas[i].saturday.split(","));
			times.push(diningAreas[i].sunday.split(","));
		}
	}
	for(k = 0; k < days.length; k++)
	{
		tr = document.createElement("tr");
		td = document.createElement("td");
		td2 = document.createElement("td");
		td3 = document.createElement("td");
		
		timeOpen = times[k][0];
		if(timeOpen == 0)
		{
			timeOpen = "Closed";
		}
		else if(timeOpen > 12)
		{
			timeOpen = timeOpen - 12 + "PM";
		}
		else{
			timeOpen = timeOpen + "AM";
		}
		last = times[k].length;
		td.innerHTML = days[k];
		td2.innerHTML = timeOpen;
		timeLast = times[k][last - 1];
		if(timeLast > 12)
		{
			timeLast = timeLast - 12 +"PM";
		}
		if(timeLast == 0)
		{
			timeLast = "Closed";
		}
		td3.innerHTML = timeLast;
		tr.appendChild(td);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tbody.appendChild(tr);
	}
table.appendChild(tbody);
}


/*
for ( i = 0; i < locations.length; i++) {

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