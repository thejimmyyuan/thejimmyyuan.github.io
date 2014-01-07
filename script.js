/**
 * @author Jimmy Yuan
 */
var loaded = "false";
function loadMenu()
{
	if(loaded == "true")
	{
		loaded = "false";
		document.getElementById("shadow").style.opacity = "0";
		document.getElementById("hidnav").style.display = "none";
	}
	else{
	loaded = "true";
	document.getElementById("shadow").style.background = "black";
	document.getElementById("shadow").style.opacity = ".5";
	document.getElementById("hidnav").style.display = "block";
	}
}
function loadBox(input)
{
	box = input;
	document.getElementById("professional").style.display = "none";
	document.getElementById("about").style.display = "none";
	document.getElementById("casual").style.display = "none";
	document.getElementById(box).style.display = "block";
	loadMenu();
}
function loadAlert()
{
	if(loaded == "true")
	{
		loaded = "false";
		document.getElementById("shadow").style.opacity = "0";
		document.getElementById("alert").style.display = "none";
	}
	else{
	loaded = "true";
	document.getElementById("shadow").style.background = "black";
	document.getElementById("shadow").style.opacity = ".5";
	document.getElementById("alert").style.display = "block";
	}
}


