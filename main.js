//Declaration of all necessary variables to play the game

let displayScorePlayer1 = document.getElementById("totalScorePlayer1");
let displayScorePlayer2 = document.getElementById("totalScorePlayer2");
let totalScore1 = 0;
let totalScore2 = 0;
let currentScorePlayer1 = document.getElementById("currentScorePlayer1");
let currentScorePlayer2 = document.getElementById("currentScorePlayer2");
let rollButton = document.getElementById("rollButton");
let holdButton = document.getElementById("holdButton");
let diceImage = document.getElementById("diceImage");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let current = 0;
// New game button, reload the page.
let newGameButton = document
  .getElementById("newGame")
  .addEventListener("click", () => {
    location.reload();
  });
let textMessage = document.getElementById("textMessage");
// Settings goal score and lose number. Easier settings by putting them here
let goal = 100;
let lose = 1;

//Stop the game if the goal is reached and display a little animation
function win() {
  if (totalScore1 >= goal) {
    textMessage.textContent = "Player 1 is the winner ! New game ?";
    textMessage.style.animation =
      "winAnim 1s ease-in 0s infinite reverse forwards";
    rollButton.removeEventListener("click", rollDice);
    holdButton.removeEventListener("click", holding);
  } else if (totalScore2 >= goal) {
    textMessage.textContent = "Player 2 is the winner ! New game ?";
    textMessage.style.animation =
      "winAnim 1s ease-in 0s infinite reverse forwards";

    rollButton.removeEventListener("click", rollDice);
    holdButton.removeEventListener("click", holding);
  }
}

// Roll a dice, and change the image according to the score.
function randomDiceNumber() {
  let randomnum = Math.floor(Math.random() * 6 + 1);
  diceImage.setAttribute("src", `./assets/img/de${randomnum}.png`);
  return randomnum;
}
//Change player fonction by using classList
function changeColorPlayer() {
  if (player1.classList.contains("activePlayer")) {
    player1.classList.toggle("activePlayer");
    player2.classList.toggle("activePlayer");
  } else if (player2.classList.contains("activePlayer")) {
    player2.classList.toggle("activePlayer");
    player1.classList.toggle("activePlayer");
  }
}
//Get the current score and add it to the total Score of the active player.
function holding() {
  if (player1.classList.contains("activePlayer")) {
    totalScore1 = totalScore1 + current;
    displayScorePlayer1.innerHTML = totalScore1;
    current = 0;
    currentScorePlayer1.innerHTML = current;
    win();
    changeColorPlayer();
  } else if (player2.classList.contains("activePlayer")) {
    totalScore2 = totalScore2 + current;
    displayScorePlayer2.innerHTML = totalScore2;
    current = 0;
    currentScorePlayer2.innerHTML = current;
    changeColorPlayer();
    win();
  }
}
// Roll the dice function and put the score in the current Score of the active player.
function rollDice() {
  let rolled = randomDiceNumber();
  if (rolled == lose) {
    textMessage.textContent = "You rolled a 1 ! Turn skipped !";

    current = 0;
    currentScorePlayer1.innerText = current;
    currentScorePlayer2.innerText = current;
    changeColorPlayer();
  } else {
    current = current + rolled;
    textMessage.textContent = `You rolled a ${rolled}, hold or continue ?`;
    if (player1.classList.contains("activePlayer")) {
      currentScorePlayer1.innerHTML = current;
    } else if (player2.classList.contains("activePlayer")) {
      currentScorePlayer2.innerHTML = current;
    }
  }
}

rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", holding);
