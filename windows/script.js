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


