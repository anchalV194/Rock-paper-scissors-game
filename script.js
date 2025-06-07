const choices = ['rock', 'paper', 'scissors'];
let roundNumber = 1;  // Start from round 1
let userScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
  const houseChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById('user-pick').textContent = capitalize(userChoice);
  document.getElementById('house-pick').textContent = capitalize(houseChoice);
  
  const result = getResult(userChoice, houseChoice);
  document.getElementById('result').textContent = result;
  
  if (result === 'You Win!') {
    userScore++;
  }
  
  // Update round number and score
  roundNumber++;  // Increments the round number
  document.getElementById('round-number').textContent = roundNumber;
  document.getElementById('score').textContent = userScore;
}

function getResult(user, house) {
  if (user === house) {
    return "It's a draw!";
  } else if (
    (user === 'rock' && house === 'scissors') ||
    (user === 'paper' && house === 'rock') ||
    (user === 'scissors' && house === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Modal Logic for Rules
const modal = document.getElementById('rules-modal');
const openModalButton = document.getElementById('open-rules');
const closeModal = document.querySelector('.close');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
