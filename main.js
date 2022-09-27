const compImg = document.querySelector(".comp-img");
const playerImg = document.querySelector(".player-img");
const btnsContainer = document.querySelector(".btn-container");
const btns = btnsContainer.querySelectorAll("button");
let computerScore = document.querySelector(".computer-score span");
let playerScore = document.querySelector(".player-score span");
const info = document.querySelector(".status");
const restartBtn=document.querySelector('.restart-btn');


function restartTheGame(){
  computerScore.textContent=0;
  playerScore.textContent=0;
  info.textContent='';
  compImg.src = "/images/rock.png";
  playerImg.src = "/images/rock.png";
  restartBtn.style=`display:none;`;
}

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
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    info.textContent = "draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore.textContent++;
    info.textContent = "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore.textContent++;
    info.textContent = "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore.textContent++;

    info.textContent = "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore.textContent++;

    info.textContent = "You Win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore.textContent++;

    info.textContent = "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore.textContent++;

    info.textContent = "You Lose! Scissors beats Paper";
  }
}
function checkWinner() {
  if (playerScore.textContent === "5") {
    info.textContent = "You win the game";
  } else if (computerScore.textContent === "5") {
    info.textContent = "You Lost the game";
  } else if (
    playerScore.textContent === "5" &&
    computerScore.textContent === "5"
  ) {
    info.textContent = "Its a tie game";
  }
}

function game() {
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const interID = setInterval(() => {
        playerImg.src = "/images/rock.png";
        compImg.src = "/images/rock.png";
        compImg.classList.toggle("animate");
        playerImg.classList.toggle("animate");
      }, 150);
      setTimeout(() => {
        clearInterval(interID);
        const playerSelection = btn.querySelector("span").textContent;
        const computerSelection = getcomputerChoice();
        if (playerSelection === "scissors") {
          playerImg.src = "/images/scissors.png";
        } else if (playerSelection === "paper") {
          playerImg.src = "/images/paper.png";
        } else {
          playerImg.src = "/images/rock.png";
        }
        playRound(playerSelection, computerSelection);
        checkWinner();
      }, 1500);
    });
  });
}

game();
