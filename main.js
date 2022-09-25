const compImg = document.querySelector(".comp-img");
const playerImg = document.querySelector(".player-img");
const btns = document.querySelectorAll("button h4");
let computerScore = document.querySelector(".computer-score span");
let playerScore = document.querySelector(".player-score span");


function getcomputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 3) {
    compImg.src = "/images/scissors.png";
    return "scissors";
  } else if (randomNumber === 2) {
    compImg.src = "/images/paper.png";
    return "paper";
  } else {
    compImg.src = "/images/rock.png";
    return "rock";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === " paper" && computerSelection === "paper") ||
    (playerSelection === "  scissors" && computerSelection === "scissors")
  ) {
    console.log("draw");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore.textContent++;
    console.log('"You Lose! Paper beats Rock"');
  } else if (playerSelection === " paper" && computerSelection === "rock") {
    playerScore.textContent++;
    console.log('"You Win! Paper beats Rock"');
  } else if (playerSelection === "  scissors" && computerSelection === "rock") {
    computerScore.textContent++;

    console.log('"You Lose! Rock beats Scissors"');
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore.textContent++;

    console.log('"You Win! Rock beats Scissors"');
  } else if (
    playerSelection === "  scissors" &&
    computerSelection === "paper"
  ) {
    playerScore.textContent++;

    console.log('"You Win! Scissors beats Paper"');
  } else if (playerSelection === " paper" && computerSelection === "scissors") {
    computerScore.textContent++;

    console.log('"You Lose! Scissors beats Paper"');
  }
}
function checkWinner() {
  if (playerScore.textContent === "5") {
    console.log(`You:${playerScore} Comp:${computerScore}`);
    console.log("You win the game");
  } else if (computerScore.textContent === "5") {
    console.log(`You:${playerScore} Comp:${computerScore}`);
    console.log("You Lost the game");
  } else if (
    playerScore.textContent === "5" &&
    computerScore.textContent === "5"
  ) {
    console.log(`You:${playerScore} Comp:${computerScore}`);
    console.log("Its a tie game");
  }
}

function game() {
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const playerSelection = btn.innerText;
      console.log(playerSelection);
      const computerSelection = getcomputerChoice();
      if (playerSelection === "  scissors") {
        playerImg.src = "/images/scissors.png";
      } else if (playerSelection === " paper") {
        playerImg.src = "/images/paper.png";
      } else {
        playerImg.src = "/images/rock.png";
      }
      playRound(playerSelection, computerSelection);
      checkWinner();
    });
  });
}

game();
