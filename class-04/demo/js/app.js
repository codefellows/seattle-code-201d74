'use strict';

// proof of life
console.log('hello world');

alert('Welcome to my Disneyland Guessing Game')

// Require a user to give specific types types of answers

function getUsersName() {
  // WE HAVE TO BE ABLE TO ACCESS OUR USER NAME!!!
  // ask a question
  let userName = prompt('What is your name?');
  console.log(userName);
  console.log(typeof userName);

  while (userName === '' || userName === null) {
    userName = prompt('Hey please enter a real name');
  }
  return userName;
}

function greetMyUser() {
  alert('Hi ' + userNameGlobal + '. Welcome to my page');

  // lets try the !== comparison operator
  if (userNameGlobal !== 'Mickey Mouse') {
    alert('Too bad, I was hoping for someone else!');
  }
}
// lets talk about array

// define an array LEAVE THIS GLOBAL

let snackArray = ['Dole Whip', 'Pickles'];
console.log(snackArray);

function addElements() {
  // adding an element to the end of the array - pop removes
  snackArray.push('Hungry Bear Burger');
  console.log(snackArray, 'with new value');

  // add a value to the beginning - shift removes
  snackArray.unshift('Mickey Pretzel');
  console.log(snackArray, 'with new value');

  console.log(snackArray.indexOf('Dole Whip'), 'This is the index of dole whip')
}

function loopSnack() {
  // write a for loop that lists all the items

  for (let index = 0; index < snackArray.length; index++) {
    console.log(snackArray[index])
  }
}


function guessSnack() {
  let userGuess = prompt('Can you guess one of my favorite snacks?');

  // this is a flag
  let youGotItRight = false;

  // define my index
  let index = 0;

  while (youGotItRight === false && index < snackArray.length) {
    console.log('we are in the loop');
    console.log('our index is ', index);
    console.log('the snack we are evaluating is', snackArray[index]);
    if (snackArray[index] === userGuess) {
          console.log('you got it right!!!');
          youGotItRight = true;
          console.log('you got it right in now true!!')
    } 
    if (index === snackArray.length - 1 && youGotItRight === false) {
      console.log('we went through every element and they never got it right');
      alert('you got it wrong!!');
    }
    index++;
  }
}
// challenge: create a list of your favorite movies. Give the user 5 guesses to figure out one of the movies from your list. If the user guesses correctly tell them they are correct and stop giving them more chances to guess. If they guess incorrectly, let them know and prompt them to guess again. 
// list/array of movies
// a way to count the guesses
// a way to itterate through the array

// make a loop that exists to ask the user the question
// The Goonies - to lowercase if all of our array els are LC

function saraFavMovies() {
  let myFavMovies = ['indiana jones', 'star wars', 'inception', '5th element', 'lotr'];
  let guesses = 5;
  // create a flag - variable you set to let you know that a condition has changed (true false);
  let correctGuess = false;
  // !correctGuess

  while (guesses > 0 && correctGuess === false) {
    let movieGuess = prompt('What is one of my favorite movies?');
    // loop through ALL MOVIES and check if their guess is one of the favorites
    // for loops are great for checking each value of an array
    console.log(movieGuess, 'user guess')
    // inner loop
    for (let index = 0; index < myFavMovies.length; index++) {
      // console.log(myFavMovies[index], 'this is the movie at ', index);
      if (movieGuess === myFavMovies[index]) {
        console.log('its a match');
        alert('congratulations you got it right');
        correctGuess = true;
      }
    }
    if (correctGuess === false) {
      alert('sorry you got it wrong');
    }
    guesses--;
    // decrement: guesses = guesses - 1;
    // increment: guesses = guesses + 1;
  }
}

getUsersName();

let userNameGlobal = getUsersName();
greetMyUser();
addElements();
loopSnack();
guessSnack();
// last
saraFavMovies();

