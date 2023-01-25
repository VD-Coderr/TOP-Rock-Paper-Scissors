// getting random Computer choice

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// variables to store score and choice
let playerScore = 0;
let computerScore = 0;

const playerSelection = prompt('Make you move...');
const computerSelection = getComputerChoice();

// function to play a round and evaluate who is a winner.
function playRound(playerSelection, computerSelection) {

  let winningStatement = `You won! ${playerSelection} beats ${computerSelection}`;
  let loosingStatement = `You loose! ${computerSelection} beats ${playerSelection}`;

  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') || 
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
    playerScore++;
    return winningStatement;
  } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
    computerScore++;
    return loosingStatement;
  } else if ((playerSelection === computerSelection) && (playerSelection != undefined)) {
    return "Draw!"
  } else {
    return 'Make your choice.'
  }
}