//Jimmy Yuan

function openDiv(name,obj) {
	
		document.getElementById("about").style.display = "none";
		document.getElementById("thoughts").style.display = "none";
		document.getElementById("pro").style.display = "none";
		document.getElementById("casual").style.display = "none";
		document.getElementById("projects").style.display = "none";
		document.getElementById(name).style.display = "block";
		obj.setAttribute("aria-pressed, true");

}
