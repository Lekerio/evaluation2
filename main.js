let totalScorePlayer1 = document.getElementById("totalScorePlayer1");
let totalScorePlayer2 = document.getElementById("totalScorePlayer2");
let currentScorePlayer1 = document.getElementById("currentScorePlayer1");
let currentScorePlayer2 = document.getElementById("currentScorePlayer2");
let rollButton = document.getElementById("rollButton");
let holdButon = document.getElementById("holdButton");
let diceImage = document.getElementById("diceImage");

function randomDice() {
let randomNum = Math.floor(Math.random() * 6 +1);
console.log("The number is : "+ randomNum);
diceImage.setAttribute("src", `./assets/img/de${randomNum}.png`);

}

rollButton.addEventListener("click", randomDice)