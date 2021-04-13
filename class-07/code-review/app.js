'use strict';

// create an array hours of opperation
const hoursOfOperations = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// create object literals for each location
// properties:
// cityName
// minCustomer
// maxCustomer
// cookieSoldPerHour
// avgCookiesPerCustomer
// a method to generate a random customer count per hour

// object literal : ,
const seattle = {
  cityName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPerCustomer: 6.3,
  // this function gets a random number between the city min and max 
  randomNumCustomers: function() {
    let randomNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    return randomNumber;
  }
}
console.log(seattle, 'preArray')
// write a function that calculates and stores the hourly sales array for each location
// we will start with just one city at a time
function generateSalesArray(location) {
  // create a property to hold the total for the day
  location.grandTotal = 0;
  // property to hold the daily sales array
  location.hourlySalesArray = [];
  for (let i = 0; i < hoursOfOperations.length; i++) {
    // get a random # of customers for that hour
    let customers = location.randomNumCustomers();
    // generate the cookies sold that hour by multiplying my cust# by avg cookies for the location
    let cookiesSold = Math.floor(customers * location.avgCookiesPerCustomer)
    // add the total to the grandTotal and push it into the hourly array
    location.grandTotal += cookiesSold; // newValue = oldValue + number
    location.hourlySalesArray.push(cookiesSold);
  }
}

generateSalesArray(seattle);

console.log(seattle, 'with the array')

// get ahold of the container we want to put things in and give it a variable - global
const locationDivElem = document.getElementById('locations');
// render them to the page

function renderLocationInfo(location) {
  // need an h2
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = location.cityName;
  locationDivElem.appendChild(h2Elem);
  // ul

  const ulElem = document.createElement('ul');
  locationDivElem.appendChild(ulElem);
  // loop through my hours and make lis
  for (let i = 0; i < hoursOfOperations.length; i++) {
    // create an li
    const liElem = document.createElement('li')
    // give it text content: 6am: 553 cookies
    liElem.textContent = `${hoursOfOperations[i]}: ${location.hourlySalesArray[i]} cookies`;
    // append to the ul
    ulElem.appendChild(liElem);
  }
  const totalLiElem = document.createElement('li');
  // Total: 9985 cookies
  totalLiElem.textContent = 'Total: ' + location.grandTotal + ' cookies';
  ulElem.appendChild(totalLiElem);
}

renderLocationInfo(seattle);
