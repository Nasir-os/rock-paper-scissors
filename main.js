const compImg = document.querySelector(".comp-img");
const playerImg = document.querySelector(".player-img");
const btns = document.querySelectorAll(".btn-container button");

function getcomputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 3) {
    compImg.src = "/images/scissors.png";
  } else if (randomNumber === 2) {
    compImg.src = "/images/paper.png";
  } else {
    compImg.src = "/images/rock.png";
  }
}

function getplayerChoice() {
  const choice = btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.innerText === "J") {
        playerImg.src = "/images/rock.png";
      } else if (btn.innerText === "K") {
        playerImg.src = "/images/paper.png";
      } else if (btn.innerText === "L") {
        playerImg.src = "/images/scissors.png";
      }
    });
  });
  return choice;
}

function playRound(playerSelection,computerSelection){

  

}




const playerSelection = getplayerChoice();
const computerSelection = getcomputerChoice();
