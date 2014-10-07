/**
 * @author Jimmy Yuan
 */
function aboutAni()
{
	//document.getElementById("pro").style.opacity = ".1";
	document.getElementById("pro").style.display = "none";
	//document.getElementById("casual").style.opacity = ".1";
	document.getElementById("casual").style.display = "none";
	document.getElementById("about").style.display= "none";
	document.getElementById("aboutMe").style.display = "block";
	document.getElementById("aboutMe").style.opacity = "1";
}
function back()
{
	document.getElementById("pro").style.display = "inline";
	document.getElementById("casual").style.display = "inline";
	document.getElementById("about").style.display= "inline";
	document.getElementById("aboutMe").style.display = "none";
	
}
