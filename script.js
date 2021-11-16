'use strict';

// Selecting elements

let currentScoreP1 = document.querySelector('#score--0');
let currentScoreP2 = document.getElementById('score--1');

let dice = document.querySelector('.dice');
dice.classList.add('hidden');

let btnRoll = document.querySelector('.btn--roll');

// rolling dice
btnRoll.addEventListener('click', function () {

  // Generate a random number
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDiceNumber);

  // Display the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${randomDiceNumber}.png`;

  // if dice == 1; if true swith player
  // else add the dice value to the current score
});
