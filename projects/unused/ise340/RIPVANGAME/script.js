var good = 0;
var bad = 0;

function openDiv(self,tar)
{

    document.getElementById(self).style.display="none";
    document.getElementById(tar).style.display = "block";
}
function checkwin()
{
 
    if(good == 4)
    {
        alert("YOU WIN, you piece the information together. You slept to the future");
    }    
}
