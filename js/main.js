document.querySelector("#rules").addEventListener("click", rulesOn);
document.querySelector("#rulesOverlay").addEventListener("click", rulesOff);
document.querySelector('.rock').addEventListener('click', choseRock)
document.querySelector('.scissors').addEventListener('click', choseScissors)
document.querySelector('.paper').addEventListener('click', chosePaper)

let playerChoice = 0
let computerChoice = 0
let score = 0

document.querySelector('#scoreLarge').innerHTML = score

function rulesOn() {
  document.querySelector("#rulesOverlay").style.display = "flex";
}

function rulesOff() {
  document.querySelector("#rulesOverlay").style.display = "none"
}

function choseRock() {
  console.log("User chose Rock")
  playerChoice = "Rock"
  document.querySelector("#middle").style.display = "none"
  whoWon(playerChoice)
}

function choseScissors() {
  console.log("User chose Scissors")
  playerChoice = "Scissors"
  document.querySelector("#middle").style.display = "none"
  whoWon(playerChoice)
}

function chosePaper() {
  console.log("User chose Paper")
  playerChoice = "Paper"
  document.querySelector("#middle").style.display = "none"
  whoWon(playerChoice)
}

function cChoice() {
  let cResult = Math.ceil(Math.random() * 3)
  if(cResult === 1) {
    return "Rock"  
  } 
  else if(cResult === 2) {
    return "Scissors"
  }
  else {
    return "Paper"
  }   
}

function whoWon(p) {
  computerChoice = cChoice()
  console.log(`Computer chose ${computerChoice}`)
  if(p === computerChoice) {
    console.log(`It's a tie!`)
    displayResult(p, computerChoice)
  }
  else if(p === "Rock" && computerChoice === "Scissors") {
    console.log(`Rock beats Scissors, player wins!`)
    displayResult(p, computerChoice)
  }
  else if(p === "Scissors" && computerChoice === "Paper") {
    console.log(`Scissors beats Paper, player wins!`)
    displayResult(p, computerChoice)
  }
  else if(p === "Paper" && computerChoice === "Rock") {
    console.log(`Paper beats Rock, player wins!`)
    displayResult(p, computerChoice)
  }
  else {
    console.log(`${computerChoice} beats ${p}, the computer wins!`)
    displayResult(p, computerChoice)
  }

}

function updateScore() {
  score += 1
  document.querySelector('#scoreLarge').innerHTML = score
}

function displayResult(p, c) {
  if(p !== '') {
    if(p === "Rock") {
      document.querySelector('#playerSelected').querySelector('.rock').style.display = "flex"
      setTimeout(3000)
    }
    else if(p === "Scissors") {
      document.querySelector('#playerSelected').querySelector('.scissors').style.display = "flex"
    }
    else {
      document.querySelector('#playerSelected').querySelector('.paper').style.display = "flex"
    }
  }

  if(c !== '') {
    setTimeout(() => {
      if(c === "Rock") {
        document.querySelector('#computerSelected').querySelector('.rock').style.display = "flex"
      }
      else if(c === "Scissors") {
        document.querySelector('#computerSelected').querySelector('.scissors').style.display = "flex"
      }
      else {
        document.querySelector('#computerSelected').querySelector('.paper').style.display = "flex"
      }
    }, 2000);
  }
}
