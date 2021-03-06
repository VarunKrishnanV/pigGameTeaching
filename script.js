'use strict';

// Selecting elements

let scoreP1 = document.querySelector('#score--0');
let currentScoreP1 = document.querySelector('#current--0');
let scoreP2 = document.getElementById('score--1');
let currentScoreP2 = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNewGame = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');


dice.classList.add('hidden');

// setting the inital values

let currentScore = 0;
currentScoreP1.textContent = 0;
currentScoreP2.textContent = 0

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
  if(randomDiceNumber !== 1){
    currentScore += randomDiceNumber;
    currentScoreP1.textContent = currentScore
  }else{
    currentScore = 0;

  }
});
