let sloganOne = ["Great guy 5/7 perfect score","Technologist, Photographer, Real"];
let sloganTwo = ["Who's Jimmy?","Technologist, Photographer, Real"];
let sloganThree = ["10/10 okay dude - IGN","Technologist, Photographer, Real"];
let sloganFour = ["Innovation - Synergy - insert Buzzword here","Technologist, Photographer, Real"];
let sloganFive = ["the chosen one","Technologist, Photographer, Real"];

let slogans = [sloganOne,sloganTwo,sloganThree,sloganFour,sloganFive];
let x = Math.floor(Math.random() * 4) + 1;
// for(let i = 0; i < 50; i++)
// {
// 	let x = Math.floor(Math.random() * 5);
// 	console.log(x);
// }
console.log(x);
$(function(){
    $("#slogan").typed({
      // strings: ["Technologist, ^1000Photographer, ^1000Real"],
      strings: slogans[x],
      typeSpeed: 20,
      backSpeed: 20,
      showCursor: false
    });
});
