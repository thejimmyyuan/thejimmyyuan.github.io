/**
 * @author Jimmy Yuan
 */
//START MENU
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
//--------------------------------------------------------------------------------------------------------------------------------
//DAY
function getTheDay()
{
	date = new Date();
	month = date.getMonth() + 1;
	day = date.getDate();
	year = date.getFullYear();
	document.getElementById("date").innerHTML = month + "/" + day + "/" + year;
}

//--------------------------------------------------------------------------------------------------------------------------------
//APPS
function openApp(app,icon)
{
	document.getElementById(app).style.display = "block";
	document.getElementById(icon).style.boxShadow = "0px 10px 20px 0px #FFF inset";	
}

function closeApp(input,inputdos)
{
	app = input;
	icon = inputdos;
	document.getElementById(app).style.display ="none";
	document.getElementById(icon).style.boxShadow = "";
}

function go()
{
	address = document.getElementById("bar").value;
	document.getElementById("frame").src = address;
}

//FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------
var move = "";
function drag(input,e)
{
    move = document.getElementById(input);
    document.addEventListener ("mousemove" , mouseMove , false);
}

function mouseMove(e) {
    x = e.screenX;
    y = e.screenY;
   
   	//alert("x:" + x + " & " + "y:" + y);
    
    move.style.left = (x - x/2)  + "px";
    move.style.top = (y - 100) + "px";
    document.addEventListener ("mouseup" , mouseUp , false);
}
function mouseUp () {
    document.removeEventListener ("mousemove" , mouseMove , false);
    document.removeEventListener ("mouseup" , mouseUp , false);
}
//CHANGE BG
//--------------------------------------------------------------------------------------------------------------------------------
function changebg(input)
{
	document.getElementById("desktop").style.background="url(images/" + input + ")";
}

/*
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
}*/