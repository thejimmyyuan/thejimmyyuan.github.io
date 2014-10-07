//Jimmy Yuan
function slideRight(el) {
	document.getElementById(el).style.left = "0px";
}

function slideLeft(el) {
	document.getElementById(el).style.left = "-15%";
}
function slideUp(el)
{
	document.getElementById(el).style.bottom = "15%";
}

function openPanel(name) {

	resetDivs();
	document.getElementById("help").style.display = "none";
	document.getElementById(name).style.display = "block";
}

function closePanel(name) {
	if(name == "landing")
	{
		resetDivs(true);
		slideRight('sideMenu');
	}
	else {
		resetDivs();
	}
	document.getElementById(name).style.display = "none";
}

function resetDivs(landing) {
	
		document.getElementById("help").style.display = "block";
		document.getElementById("landing").style.display ="none";
		document.getElementById("about").style.display = "none";
		document.getElementById("pro").style.display = "none";
		document.getElementById("casual").style.display = "none";
		document.getElementById("projects").style.display = "none";

}
