'use strict';

alert('I\'m alive!');

// let grass = 'red';
// we are going to use some logical statements - to alert our user depending on their answer to a question
// || &&
// if (condition to be evaluated) { this code block to read IF our condition is true }
// if (grass === 'green') {
//   'play ball'
// }

let disneyland = prompt('Have you ever been to Disneyland? Please enter yes or no');
console.log(disneyland);

let lowercaseDisneyland = disneyland.toLowerCase()
console.log(lowercaseDisneyland, 'This is the lowercase version');

//using an if/else statement to verify and respond
if (lowercaseDisneyland === 'yes' || lowercaseDisneyland === 'y') {
  alert('Awesome! I hope you had fun!');
  // how do we account for other positive responses?
} else if (lowercaseDisneyland === 'yeah') {
  alert('you don\'t sound too excited');
}
else {
  // if they say anything else that we didn't specify above ^
  alert('Too bad! You should go!');
}



let funLevel = prompt('On a scale of 1-3, with 3 being the most fun; how much fun did you have at Disneyland...')
// when we use prompt the data type we get back is a string

// using a switch statement to respond
// switch (expression) {
//   case x:
//     //do something;
//     break;
//   case y:
//     // do something else;
//     break;
//   default:
//     // do this other thing
// }

console.log(typeof funLevel);

let numFunLevel = parseInt(funLevel);
console.log(typeof numFunLevel);

switch (numFunLevel) {
  case 1:
    alert('I am sorry, you should try again');
    break;
  case 2:
    alert('Did you even try a pickle? Shouldn\'t have eaten that Turkey leg!');
    break;
  case 3:
    alert('Awesome! We should go together sometime!');
    break;
  default:
    alert('Let me plan your next trip')
}



