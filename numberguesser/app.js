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

console.log(winningNum)
guessBtn.addEventListener('click', submitForm)

function submitForm(){
  if(guessInput.value > max || guessInput.value < min ){
    setMessage(`Please select a number between ${min} to ${max}`, 'red')
  } else {
    if(guessesLeft < 0){
      window.location.reload()
    }
    if(guessInput.value == winningNum) {
      setMessage('You have won!!', 'green');
      guessInput.disabled = 'true';
      guessBtn.value = 'Play Again'
      guessesLeft = -1;
    } else {
      guessesLeft -= 1;
      setMessage(`You have  ${guessesLeft} guess left`);
      if(guessesLeft <= 0 ){
        setMessage(`You have lost!! The guessing number was ${winningNum}. `, 'red');
        guessInput.disabled = 'true';
        guessBtn.value = 'Play Again'
        guessesLeft = -1;
      }
    }
  }
}

function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}
