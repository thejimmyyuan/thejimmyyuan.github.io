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

function populateArray() {

    var locations;

    locations = xmlhttp.responseXML.documentElement.getElementsByTagName("location");

    var dining;

    for (i = 0; i < locations.length; i++) {

        name = locations[i].getElementsByTagName('name')[0].childNodes[0].nodeValue;

        fridayy = locations[i].getElementsByTagName('fridayy')[0].childNodes[0].nodeValue;

        saturdayy = locations[i].getElementsByTagName('saturdayy')[0].childNodes[0].nodeValue;

        sundayy = locations[i].getElementsByTagName('sundayy')[0].childNodes[0].nodeValue;

        monday = locations[i].getElementsByTagName('monday')[0].childNodes[0].nodeValue;

        tuesday = locations[i].getElementsByTagName('tuesday')[0].childNodes[0].nodeValue;

        wednesday = locations[i].getElementsByTagName('wednesday')[0].childNodes[0].nodeValue;

        thursday = locations[i].getElementsByTagName('thursday')[0].childNodes[0].nodeValue;

        friday = locations[i].getElementsByTagName('friday')[0].childNodes[0].nodeValue;

        saturday = locations[i].getElementsByTagName('saturday')[0].childNodes[0].nodeValue;

        sunday = locations[i].getElementsByTagName('sunday')[0].childNodes[0].nodeValue;

        dining = {};

        dining.name = name;

        dining.fridayy = fridayy;

        dining.saturdayy = saturdayy;

        dining.sundayy = sundayy;


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

    for (i = 0; i < diningAreas.length; i++) {

        var hours = diningAreas[i][dayValue].split(",");

        for (z = 0; z < hours.length; z++) {

            if (hours[z] - timeValue == .5 || hours[z] - timeValue == 0) {

                places.push(diningAreas[i]);

            }

        }

    }

    list = document.createElement("ul");

    list.className = "collapsible";

    for (k = 0; k < places.length; k++) {

        openPlace = document.createElement("li");

        divTitle = document.createElement("div");

        divTitle.className = "collapsible-header";

        divTitle.innerHTML = places[k].name;

        divTitle.id = "d_" + k;

        divTitle.onclick = function() {

            appendtheTable(this);

        }
        divBody = document.createElement("div");

        divBody.className = "collapsible-body tableInsertion";

        divBody.id = "d" + k;

        openPlace.appendChild(divTitle);

        openPlace.appendChild(divBody);

        list.appendChild(openPlace);

    }

    placeTitle = document.createElement("h3");

    placeTitle.innerHTML = "Places which are Open";

    document.getElementById("results").appendChild(placeTitle);

    document.getElementById("results").appendChild(list);

    $(document).ready(function() {

        $('.collapsible').collapsible();

    });

}

function clearDiv(div) {

    var myNode = document.getElementById(div);

    while (myNode.firstChild) {

        myNode.removeChild(myNode.firstChild);

    }

}

function showSchedule(optional, title) {

    var text;

    if (optional != null) {

        whereAppend = optional;

        text = title;

    } else {

        clearDiv("results");

        whereAppend = "results";

        var e = document.getElementById("where");

        text = e.options[e.selectedIndex].text;

    }

    table = document.createElement('table');

    table.className = "hoverable centered";

    theader = document.createElement('thead');

    trow = document.createElement('tr');

    th = document.createElement('th');

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

    document.getElementById(whereAppend).appendChild(table);

    var times = new Array;

    var days = ["3/13", "3/14", "3/15", "3/16", "3/17", "3/18", "3/19", "3/20", "3/21","3/22"];

    for (i = 0; i < diningAreas.length; i++) {

        if (text == diningAreas[i].name) {
        	times.push(diningAreas[i].fridayy.split(","));
        	
        	times.push(diningAreas[i].saturdayy.split(","));
        	
        	times.push(diningAreas[i].sundayy.split(","));

            times.push(diningAreas[i].monday.split(","));

            times.push(diningAreas[i].tuesday.split(","));

            times.push(diningAreas[i].wednesday.split(","));

            times.push(diningAreas[i].thursday.split(","));

            times.push(diningAreas[i].friday.split(","));

            times.push(diningAreas[i].saturday.split(","));

            times.push(diningAreas[i].sunday.split(","));

        }

    }

    for (k = 0; k < days.length; k++) {

        tr = document.createElement("tr");

        td = document.createElement("td");

        td2 = document.createElement("td");

        td3 = document.createElement("td");

        timeOpen = times[k][0];

        if (timeOpen == 0) {

            timeOpen = "Closed";

        } else if (timeOpen > 12) {

            timeOpen = timeOpen - 12;

            timeOpen = timeOpen.toString();

            var half = timeOpen.split(".");

            if (half[1] == "5") {

                timeOpen = half[0] + ":30PM";

            } else {

                timeOpen = half[0] + "PM";

            }

        } else if (timeOpen == 12) {

            timeOpen = timeOpen + "PM";

        } else {

            var half = timeOpen.split(".");

            if (half[1] == "5") {

                timeOpen = half[0] + ":30AM";

            } else {

                timeOpen = half[0] + "AM";

            }

        }

        last = times[k].length;

        td.innerHTML = days[k];

        td2.innerHTML = timeOpen;

        timeLast = times[k][last - 1];

        if (timeLast > 24) {

            timeLast = timeLast - 24;

            timeLast = timeLast.toString();

            var lastHalf = timeLast.split(".");

            if (lastHalf[1] == "5") {

                timeLast = lastHalf[0] + ":30AM";

            } else {

                timeLast = lastHalf[0] + "AM";

            }

        } else if (timeLast > 12) {

            timeLast = timeLast - 12;

            timeLast = timeLast.toString();

            var lastHalf = timeLast.split(".");

            if (lastHalf[1] == "5") {

                timeLast = lastHalf[0] + ":30PM";

            } else {

                timeLast = lastHalf[0] + "PM";

            }

        } else {

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

function appendtheTable(e) {

    var num = e.id.split("_");

    clearDiv("d" + num[1]);

    showSchedule("d" + num[1], e.innerHTML);

}