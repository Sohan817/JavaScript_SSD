//Rock paper scissors game
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lost: 0,
  tie: 0,
};
updateScore();

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function updateScore() {
  document.querySelector(".js-score").innerHTML =
    `Win: ${score.win}, Lost ${score.lost}, Tie ${score.tie}`;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove == "rock") {
    if (computerMove == "rock") {
      result = "Win";
    } else if (computerMove == "paper") {
      result = "Lost";
    } else if (computerMove == "scissors") {
      result = "Tie";
    }
  } else if (playerMove == "paper") {
    if (computerMove == "rock") {
      result = "Tie";
    } else if (computerMove == "paper") {
      result = "Win";
    } else if (computerMove == "scissors") {
      result = "Lost";
    }
  } else if (playerMove == "scissors") {
    if (computerMove == "rock") {
      result = "Tie";
    } else if (computerMove == "paper") {
      result = "Lost";
    } else if (computerMove == "scissors") {
      result = "Win";
    }
  }
  if (result === "Win") {
    score.win++;
  } else if (result === "Lost") {
    score.lost++;
  } else if (result === "Tie") {
    score.tie++;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();

  document.querySelector(".js-score-result").innerHTML = `${result}`;
  document.querySelector(".js-move").innerHTML =
    `You <img src="images/${playerMove}-emoji.png" class="move-icon" />
         <img src="images/${computerMove}-emoji.png" class="move-icon" /> Computer`;
}
