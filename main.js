let totalScorePlayer1 = document.getElementById("totalScorePlayer1");
let totalScorePlayer2 = document.getElementById("totalScorePlayer2");
let currentScorePlayer1 = document.getElementById("currentScorePlayer1");
let currentScorePlayer2 = document.getElementById("currentScorePlayer2");
let rollButton = document.getElementById("rollButton");
let holdButton = document.getElementById("holdButton");
let diceImage = document.getElementById("diceImage");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

function randomDiceNumber() {
  let randomNum = Math.floor(Math.random() * 6 + 1);
}

function changeColorPlayer() {
  if (player1.classList.contains("activePlayer")) {
    player1.classList.toggle("activePlayer");
    player2.classList.toggle("activePlayer");
  }
  else if (player2.classList.contains("activePlayer")) {
    player2.classList.toggle("activePlayer");
    player1.classList.toggle("activePlayer");
  }
}


holdButton.addEventListener("click", changeColorPlayer)
