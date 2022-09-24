const compImg = document.querySelector(".comp-img");
const playerImg = document.querySelector(".player-img");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const btns = document.querySelectorAll(".btn-container button");


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

function getplayerChoice(){
  let choice = btns.forEach(btn=>{btn.addEventListener('click',()=>btn.textContent)});
  if (choice === 'scissors') {
    playerImg.src = "/images/scissors.png";
    return "scissors";
  } else if (choice === 'paper') {
    playerImg.src = "/images/paper.png";
    return "paper";
  } else {
    playerImg.src = "/images/rock.png";
    return "rock";
  }
}

// function playRound(playerSelection,computerSelection){

// }

// const playerSelection=getplayerChoice();
// const computerSelection=getcomputerChoice();


let choice = btns.forEach(btns=>{btns.addEventListener('click',()=>btns.textContent)});


