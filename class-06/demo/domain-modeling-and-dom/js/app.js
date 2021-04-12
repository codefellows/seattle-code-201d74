'use strict';

// what do we need to know about each cat
// name
// age
// interests
// isGoodWithKids
// isGoodWithDogs
// isGoodWithCats
// how do I know their age? for today we will get a random age

const frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['lazers', 'mice', 'string'],
  isGoodWithOtherCats: true,
  isGoodWithKids: false,
  isGoodWithDogs: true,
  photo: './images/frankie.jpeg',
  getAge: function() {
    console.log(this.age);
    this.age = randomAge(3,12) + 'months';
    console.log(this.age);
  }
}

// CONTEXTUAL THIS!!!! 
// The one I am talking about now, THIS ONE

const jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['treats', 'yarn', 'birds'],
  isGoodWithOtherCats: true,
  isGoodWithKids: true,
  isGoodWithDogs: true,
  photo: './images/jumper.jpeg',
  getAge: function() {
    console.log(this.age);
    this.age = randomAge(3,12) + 'months';
    console.log(this.age);
  }
}


const serena = {
  name: 'Serena',
  age: 0,
  interests: ['pets', 'scratches', 'hissing'],
  isGoodWithOtherCats: false,
  isGoodWithKids: false,
  isGoodWithDogs: false,
  photo: './images/serena.jpeg',
  getAge: function() {
    console.log(this.age);
    this.age = randomAge(3,12) + 'months';
    console.log(this.age);
  }
}

/// functions should have one job
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

frankie.getAge();
jumper.getAge();
serena.getAge();

const catArray = [frankie, jumper, serena];

// get an element from the dom to talk about
// assign a variable
const kittenProfiles = document.getElementById("kittenProfiles");


for (let j = 0; j < catArray.length; j++) {
  const article = document.createElement('article');
  //  where does this live?
  kittenProfiles.appendChild(article);

  let currentCat = catArray[j];
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = currentCat.name;
  article.appendChild(h2Elem);

  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', currentCat.photo);
  imgElem.setAttribute('alt', `cute picture of ${currentCat.name}. You should adopt this cat!`);
  article.appendChild(imgElem);
  
  const pElem = document.createElement('p');
  pElem.textContent = `${currentCat.name} is a fun loving cat that is ${currentCat.age} old`;
  article.appendChild(pElem);

  const ulElem = document.createElement('ul');
  article.appendChild(ulElem);
  
    for (let i = 0; i < currentCat.interests.length; i++) {
      // create an li
      const liElem = document.createElement('li');
      // add text content that matches frankies likes at that index
      liElem.textContent = `${currentCat.name} likes ${currentCat.interests[i]}`;
      // append li to ul
      ulElem.appendChild(liElem);
    }

}








//        <!-- <article>
{/* <h2>kittens name</h2>
<p>description</p>
<ul>
  <li>what do they like</li>
</ul>
<img>
</article> --> */}