//TDD 
// Make objects for each image - name, image, clicks - seen? (check)
// constructor function ^^ (check)
// create count variable (check)
// counting guesses ONLY allowing a certain number and then you can't guess any more
// render two images - must be two different images
// - renders
// - pick goats
// you can click - listener
// when you click it counts AND renders new images
// stretch goal - make sure images don't repeat each round 
// wipe out data of results to start over - render the results
// Get global variables

// Global Variables
const results = document.getElementById('goat-clicks');
const bothGoats = document.getElementById('all_goats')
const rightGoatImg = document.getElementById('right_goat_img');
const leftGoatImg = document.getElementById('left_goat_img');
const leftGoatPElem = document.getElementById('left_goat_p');
const rightGoatPElem = document.getElementById('right_goat_p');

let totalClicks = 0;

let leftGoat = null;
let rightGoat = null;

const GoatPictures = function(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.clicks = 0;
  this.timesShown = 0;

  GoatPictures.allImages.push(this);
}
// const goatArray = [];
GoatPictures.allImages = [];
// adding a property to the GoatPictures object that is an array

// write a function that renders goats
const renderGoats = function() {
  // use the right and left global variables for the image and the p tag to stick the goats on the page
  leftGoatImg.src = leftGoat.imagePath;
  rightGoatImg.src  = rightGoat.imagePath;
  rightGoatPElem.textContent = rightGoat.name;
  leftGoatPElem.textContent = leftGoat.name;
}

// write a function that pickss the two different goats
function goatPicker() {
   // write a function that picks one goat at random, and then another, making sure the first and the second goat are not the same
   const leftIndex = Math.floor(Math.random() * GoatPictures.allImages.length);
   console.log(GoatPictures.allImages);
   console.log(leftIndex);
   let rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length);
   console.log(GoatPictures.allImages);
   // a different index number than the first one
   while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length);
    console.log(rightIndex);
   }
  //  GoatPictures.allImages[leftIndex]
  leftGoat = GoatPictures.allImages[leftIndex];
  rightGoat = GoatPictures.allImages[rightIndex];
}

function displayVoteCount() {
  // remove current input and replace
  results.innerHTML = ' ';
  let h2Elem = document.createElement('h2')
  h2Elem.textContent = 'Goat Likes'
  results.appendChild(h2Elem);
  for (let goat of GoatPictures.allImages) {
    const liElem = document.createElement('li');
    liElem.textContent = `${goat.name}: ${goat.clicks}`;
    results.appendChild(liElem);
  }
  // for (let i = 0; i < GoatPictures.allImages.length; i++) {
  //   const liElem = document.createElement('li');
  //   let goat = GoatPictures.allImages[i];
  //   liElem.textContent = `${goat.name}: ${goat.clicks}`;
  //   results.appendChild(liElem);
  // }
}

// handle the result of the click
function handleClick(event) {
  console.log(event.target);
  const clickedTarget = event.target;
  const id = clickedTarget.id;
  // we need a way to compare the left goat and right goat to what we clicked on to make sure we count the vote 
  // if they vote 10 times or less do this 
  if (totalClicks < 10) {
    if (id === 'left_goat_img' || id === 'right_goat_img') {
      // increment votes total
      // increment the particular goat we clicked on votes
      if (id === 'left_goat_img') {
        leftGoat.clicks++;
      } else {
        rightGoat.clicks++;
      }
      totalClicks++;
      leftGoat.timesShown++;
      rightGoat.timesShown++;
      goatPicker();
      renderGoats();
    }
  }
  if (totalClicks === 10) {
    bothGoats.removeEventListener('click', handleClick);
    // render our results
    displayVoteCount();
  }
  // if they vote more than ten times turn it off!
}


new GoatPictures('Cruising Goat', './images/cruisin-goat.jpg');
new GoatPictures('Float Your Goat', './images/float-your-goat.jpg');
new GoatPictures('Goat Away', './images/goat-away.jpg')
new GoatPictures('Goat Out of Hand', './images/goat-out-of-hand.jpg')
new GoatPictures('Kissing Goat', './images/kissing-goat.jpg');
new GoatPictures('Sassy Goat', './images/sassy-goat.jpg');
new GoatPictures('Sweater Goat', './images/sweater-goat.jpg');
new GoatPictures('Smiling Goat', './images/smiling-goat.jpg');

// add a listener
bothGoats.addEventListener('click', handleClick)

goatPicker();
console.log('left goat', leftGoat);
console.log('Right Goat', rightGoat);
renderGoats();
