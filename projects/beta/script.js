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
function themeMenu()
{
	if(loaded == "true")
	{
		loaded = "false";
		document.getElementById("shadow").style.opacity = "0";
		document.getElementById("themeChoose").style.display = "none";
	}
	else{
	loaded = "true";
	document.getElementById("shadow").style.background = "black";
	document.getElementById("shadow").style.opacity = ".5";
	document.getElementById("themeChoose").style.display = "block";
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
function changeTheme(input)
{
	color = input;
	if(color == 'blue')
	{
		document.getElementById("body").style.background = "cornflowerblue";
		document.getElementById("body").style.color = "white";
	}
	else{
		document.getElementById("body").style.background = "black";
		document.getElementById("body").style.color = "white";
	}
	themeMenu();
}