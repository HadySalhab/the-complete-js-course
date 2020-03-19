const diceImg = document.querySelector(".dice");
let scores;
let roundScore;
let activePlayer;
let gameOver;

initGame();
//function btn() {
//Do Something here
//}

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (!gameOver) {
    let dice = Math.floor(Math.random() * 6 + 1);
    diceImg.style.display = "block";
    diceImg.src = `dice-${dice}.png`;

    if (dice === 1) {
      changePlayer();
    } else {
      roundScore += dice;
      document.getElementById(
        `current-${activePlayer}`
      ).textContent = roundScore.toString();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (!gameOver) {
    scores[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      //winner
      gameOver = true;
      document.getElementById(`name-${activePlayer}`).textContent = "WINNER";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.remove("active");
    } else {
      changePlayer();
    }
  }
});

function changePlayer() {
  roundScore = 0;
  diceImg.style.display = "none";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.getElementById(`current-${activePlayer}`).textContent = "0";
  activePlayer = activePlayer === 0 ? 1 : 0;
}

document.querySelector(".btn-new").addEventListener("click", initGame);

function initGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameOver = false;
  //0 for player 1 , 1 for player 2
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById(`name-0`).textContent = "Player 1";
  document.getElementById(`name-1`).textContent = "Player 2";
  document.querySelector(`.player-0-panel`).classList.remove("winner");
  document.querySelector(`.player-1-panel`).classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  diceImg.style.display = "none";
}
