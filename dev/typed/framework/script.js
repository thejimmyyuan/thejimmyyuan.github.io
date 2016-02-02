$(function(){
    $(".name").typed({
      strings: ["Hi, my name is Vanessa","I am an AI created by Jimmy!", "Feel free to input commands!^5000","Take your time"],
      typeSpeed: 0,
    });
});
function runCommand(command)
{
    if(command == "hello")
    {
        alert();
    }
}
