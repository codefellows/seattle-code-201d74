'use strict';

// proof of life
console.log('hello world');

alert('Welcome to my Disneyland Guessing Game')

// Require a user to give specific types types of answers

// ask a question
let userName = prompt('What is your name?');
console.log(userName);
console.log(typeof userName);

while (userName === '' || userName === null) {
  userName = prompt('Hey please enter a real name');
}

alert('Hi ' + userName + '. Welcome to my page');

// lets try the !== comparison operator
if (userName !== 'Mickey Mouse') {
  alert('Too bad, I was hoping for someone else!');
}

// lets talk about array

// define an array

let snackArray = ['Dole Whip', 'Pickles'];
console.log(snackArray);

// adding an element to the end of the array - pop removes
snackArray.push('Hungry Bear Burger');
console.log(snackArray, 'with new value');

// add a value to the beginning - shift removes
snackArray.unshift('Mickey Pretzel');
console.log(snackArray, 'with new value');

console.log(snackArray.indexOf('Dole Whip'), 'This is the index of dole whip')

// write a for loop that lists all the items

for (let index = 0; index < snackArray.length; index++) {
  console.log(snackArray[index])
}

let userGuess = prompt('Can you guess one of my favorite snacks?');


// for (let index = 0; index < snackArray.length; index++) {
//   if (snackArray[index] === userGuess) {
//     console.log('you got it right!!!');
//     index = snackArray.length;
//   } 
  
// }

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
