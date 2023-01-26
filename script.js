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

let playerSelection
let computerSelection

// updateting choices of user and computer before next round
function getChoices() {
  playerSelection = prompt('Make you move...');
  computerSelection = getComputerChoice();
}
// function to play a round, evaluate who is a winner, display a message and add score
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

// checks if anybody won the game (5 scores)
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// displays message of score after each round or final message after someone won
function updateScore() {
  if (isGameOver()) {
  return `Game Over: You: ${playerScore}; Computer: ${computerScore}`;
} else {
  return `Score: You: ${playerScore}; Computer: ${computerScore}`;
}
}

// keeps game in correct order: choose your weapon, play a round nad show the result
function game() {
  getChoices();
  console.log(playRound(playerSelection, computerSelection));
  console.log(updateScore());
}

// for loop to play 5 games
for(let i = 1; i < 6; i++) {
  console.log(game());
}