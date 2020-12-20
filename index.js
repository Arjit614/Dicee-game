//set player name
var player1 = prompt("Enter the name of player 1 below");
var player2 = prompt("Enter the name of player 2 below");
document.querySelectorAll("p")[0].innerHTML = player1;//player 1 name
document.querySelectorAll("p")[1].innerHTML = player2;//player 2 name
//changing players name according to their choice



//random dices
var randomnumber1 = Math.floor(Math.random() * 6) + 1; //Random number generator
var randomDiceImage = "dice" + randomnumber1 + ".png"; //Random Image
var imageSource = "images/" + randomDiceImage; //Random dice generator complete
var firstDice = document.querySelectorAll("img")[0];
firstDice.setAttribute("src", imageSource);//Random dice injected in website
//first dice complete

//second dice start
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomDiceImage2;
var secondDice = document.querySelectorAll("img")[1];
secondDice.setAttribute("src", imageSource2);
//second dice complete
//random dice complete




//changing title
if (randomnumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "⛳" + player1 + " Wins";
}
else if(randomNumber2 > randomnumber1){
	document.querySelector("h1").innerHTML = player2 + " Wins⛳";
}
else{
	document.querySelector("h1").innerHTML = "⛳Draw⛳";
}
//title change complete








