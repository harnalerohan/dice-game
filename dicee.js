function all (){

function first (){
var randomNumber1 = Math.floor (Math.random()*7);
if (randomNumber1 < 1){
var randomNumber1 = randomNumber1+1
return randomNumber1;
}
else {
	return randomNumber1;
}
}
first();
var number = first();

document.getElementsByTagName("img")[0].setAttribute("src" , "images/dice" + number + ".png");

//Second dice

function second (){
var randomNumber2 = Math.floor(Math.random()*7);
if (randomNumber2 < 1){
var randomNumber2 = randomNumber2+1
return randomNumber2;
}
else {
	return randomNumber2;
}
}
second();
var number2 = second();

//header dom:

document.getElementsByTagName("img")[1].setAttribute("src" , "images/dice" + number2 + ".png");

if (number>number2){
	document.querySelector("h1").textContent = "Player 1 wins.";
}
else if(number<number2){
	document.querySelector("h1").textContent = "Player 2 wins.";
}
else {
	document.querySelector("h1").textContent = "Its a draw.";
}
}

 all();




