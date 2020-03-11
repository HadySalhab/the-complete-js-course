var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

console.log(dice);

//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML ="<em>" + dice + "</em>";
//var x = document.querySelector("#score-0").textContent;
//console.log(x);

document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
//function btn() {
//Do Something here
//}

// document.querySelector(".btn-roll").addEventListener("click", btn); //we don't include the parenthesis here, its a callback function
//Anonymous function
document.querySelector(".btn-roll").addEventListener("click", function(e) {
  //Random Number
  var dice = Math.floor(Math.random() * 6) + 1;

  //Display the Result
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";

  if (dice > 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    document.querySelector(".dive").style.display = "none";
  }
});
