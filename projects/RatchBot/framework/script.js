
var champions = ["Udyr","Graves","Janna","Brand","Zilean"];
var objectives = ["top","bot","mid","baron","blue","red"];
var nickwords = ["dying","feeding","being useless in fights","making excuses","going in"];
var jimmywords = ["armor","magic resist","pink wards", "blue trinket","red trinket"];
var davidwords = ["set up lanes", "not be shit", "join us in fights", "not get caught","feed midlane"];
var jasonwords = ["play passively","understand I am roaming","understand I'm harassing them","understand I'm not in lane","we cant win trades"];
var richiewords = ["I honestly played fine that game" , "What are you talking about David? My Bard is fine...", "The team has to listen to my calls","We could have won if I had just played Alistar" ,"ATTACK THE NEXUS"];

var champion;
var jword;
var nickword;
var davidword;
var objective;
var inputs = [champions,nickwords,jimmywords,davidwords,objectives];
var output = [champion,nickword,jword,davidword,objective];

for(var i = 0; i < 5; i++)
{
    var number = Math.floor(Math.random() * 4);
    output[i] = inputs[i][number];
}
var jasonword = jasonwords[Math.floor(Math.random() * 4)];
var richieword = richiewords[Math.floor(Math.random() * 4)];
$(function(){
    $("#opening").typed({
      strings: ["Why did we lose?<br> We should have banned <i>" + output[0] + "</i>.<br> Also Nick keeps<i> " + output[1] +".<br></i> Jimmy is also not buying <i>"+ output[2] +"</i>.<br> David has to <i>"+ output[3] +"</i>.<br> Jason has to <i>"+ jasonword+ "</i><br><i>"+richieword+"</i> <br> Also we should have given up <i>"+ output[4] +"</i> more often and stop dying. <br> And god damn, buy wards."],
      typeSpeed: 0,
      showCursor: false
    });
});


//We lost because we didn't ban <champion>, the win rate is too high and we don't stand a chance. Also Nick keeps <nickwords>.
//Jimmy is also not buying <jimmywords>. David has to <davidphrase>. We should

//Why did we lose? We should have banned <champion>. Also Nick keeps <nickwords>. Jimmy is also not buying <jimmywords>. David has to <davidphrase>. We should have given up <objective>
//more often and stop dying. And god damn, buy wards.
