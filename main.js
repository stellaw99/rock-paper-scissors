const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let example;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
      computerChoice = 'rock';
      computerChoiceDisplay.style.color = 'brown'
  }
  if (randomNumber === 2) {
      computerChoice = 'paper';
      computerChoiceDisplay.style.color = 'brown'
  }
  if (randomNumber === 3) {
      computerChoice = 'scissors';
      computerChoiceDisplay.style.color = 'brown'
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  var result = document.getElementById('result');
    let beforeStartGameText = 'You have not won the game yet';
    console.log('result')
  //   beforeStartGameText.style.color = 'red';

//   if (computerChoice === userChoice) {
//     result = 'its a draw';
//   }

  if (computerChoice === userChoice) {
      result = 'its a draw!';
      userChoiceDisplay.style.color = 'darkgoldenrod'
      resultDisplay.style.color = 'green';
    //   resultDisplay.text.bold = 'green';

  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
      result = 'YAY You Win :)';
      userChoiceDisplay.style.color = 'darkgoldenrod'
    resultDisplay.style.color = 'green';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
      result = 'Boo You Lose :(';
      userChoiceDisplay.style.color = 'darkgoldenrod'
    resultDisplay.style.color = 'brown';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
      result = 'YAY You Win :)';
      userChoiceDisplay.style.color = 'darkgoldenrod'
    resultDisplay.style.color = 'green';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
      result = 'Boo You Lose :(';
      userChoiceDisplay.style.color = 'darkgoldenrod'
    resultDisplay.style.color = 'brown';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
      result = 'Boo You Lose :(';
      userChoiceDisplay.style.color = 'darkgoldenrod'
    resultDisplay.style.color = 'brown';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
      result = 'YAY You Win :)';
      userChoiceDisplay.style.color = 'darkgoldenrod'
    resultDisplay.style.color = 'green';
  }
  resultDisplay.innerHTML = result;
}
