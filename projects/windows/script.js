/**
 * @author Jimmy Yuan
 */
var menu = "false";
function startMenu()
{
	if(menu == "true")
	{
		menu = "false";
		document.getElementById("menu").style.display = "none";
	}
	else{
	menu = "true";
	document.getElementById("menu").style.display = "block";
	}
	
}
function closeSystem()
{
	if(menu == "true")
	{
		menu = "false";
		document.getElementById("menu").style.display = "none";
	}
	
}
function closeApp(input,inputdos)
{
	app = input;
	icon = inputdos;
	document.getElementById(app).style.display ="none";
	document.getElementById(icon).style.boxShadow = "";
}
function getTheDay()
{
	date = new Date();
	month = date.getMonth() + 1;
	day = date.getDate();
	year = date.getFullYear();
	document.getElementById("date").innerHTML = month + "/" + day + "/" + year;
}

//Explorer
function openExplorer()
{
	document.getElementById("explorer").style.display = "block";
	document.getElementById("expIcon").style.boxShadow = "0px 10px 20px 0px #FFF inset";	
}
var move = "";
function drag(input,e)
{
	
	target = input;
	move = document.getElementById(target);
	move.addEventListener ("mousedown" , mouseDown , false);
	
}
function mouseDown () {
    stateMouseDown = true;
    document.addEventListener ("mousemove" , mouseMove , false);
}
function mouseMove (ev) {
    var pX = ev.pageX;
    var pY = ev.pageY;
    move.style.left = pX + "px";
    move.style.top = pY + "px";
    document.addEventListener ("mouseup" , mouseUp , false);
}

function mouseUp () {
    document.removeEventListener ("mousemove" , mouseMove , false);
    document.removeEventListener ("mouseup" , mouseUp , false);
}