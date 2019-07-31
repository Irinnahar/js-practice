/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = parseInt(Math.random()*10) + 1,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


guessBtn.addEventListener('click', submitForm)

function submitForm(){
  if(guessInput.value > max || guessInput.value < min ){
    setMessage(`Please select a number between ${min} to ${max}`, 'red')
  } else {
    if(guessInput.value == winningNum) {
      setMessage('You have won!!', 'green')
    } else {
      setMessage(`You have lost! The guessing number was ${winningNum}`, 'red')
    }
  }
}

function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}
