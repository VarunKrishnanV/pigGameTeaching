'use strict';

// Selecting elements

let scoreP1 = document.querySelector('#score--0');
let currentScoreP1 = document.querySelector('#current--0');
let scoreP2 = document.getElementById('score--1');
let currentScoreP2 = document.getElementById('current--1');

let dice = document.querySelector('.dice');
dice.classList.add('hidden');

let btnRoll = document.querySelector('.btn--roll');
let btnNewGame = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--roll');


// Initializing with default values
scoreP1.textContent = 0;
scoreP2.textContent = 0;
let currentScore = 0;
let activePlayer = 0;


// rolling dice
btnRoll.addEventListener('click', function () {

  // Generate a random number
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDiceNumber);

  // Display the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${randomDiceNumber}.png`;

  // if dice == 1; if true swith player
  if(randomDiceNumber !== 1){
      currentScore = currentScore + randomDiceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore
  }else{
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
  }


  // else add the dice value to the current score
});
