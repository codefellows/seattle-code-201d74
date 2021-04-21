'use strict';

// what do we need to do?

// ADD LOCAL STORAGE
// check local storage for previous orders, if I have any render them


// pointer to the form 
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');

// we need a constructor funtion for drinks
function Coffee(name, size, milk, drinkType) {
  this.name = name;
  this.size = size;
  this.milk = milk;
  this.drinkType = drinkType;

  // put them in an array
  Coffee.drinks.push(this);
}

// we need an array to hold all of our drinks
Coffee.drinks = [];

// write a function to check local storage
function getDrinksFromStorage() {
  let stringifiedOrders = localStorage.getItem('previousOrders');
  console.log(stringifiedOrders, "these just came out of storage");
  // if it is null (I didn't have anything)- in bus mall if you don't have anything in storage you will construct new products for your product array
  // if it is NOT null render previous orders to the page
  // how? because they are a string right now

  // if our code requires instances of coffee to use the prototype method turn them all back into coffees
  if (stringifiedOrders !== null) {
    let parsedOrders = JSON.parse(stringifiedOrders);
    console.log(parsedOrders);
    for (let i = 0; i < parsedOrders.length; i++) {
      new Coffee(parsedOrders[i].name, parsedOrders[i].size, parsedOrders[i].milk, parsedOrders[i].drinkType)
    }
    renderOrders();
  }
  // if null nothing happens


}

function storeDrinks() {
  // stringify the drinks 
  console.log(Coffee.drinks);
  let stringifiedOrders = JSON.stringify(Coffee.drinks);
  console.log(stringifiedOrders);
  // place stringified drinks in storage
  localStorage.setItem('previousOrders', stringifiedOrders);
}

// function to handle submit
function  handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  // add a variable so I don't have to keep typing event.target
  let drink = event.target;
  const name = drink.name.value;
  const size = drink.size.value;
  const milk = drink.milk.value;
  const drinkType = drink.drinkType.value;

  new Coffee(name, size, milk, drinkType)
  // console.log(Coffee.drinks);
  // update local storage with the new full array including the new drink
  storeDrinks();
  renderOrders();
}

// function to render drinks to previous orders
function renderOrders() {
  // WIPE OUT PREVIOUS CONTENT
  orders.innerHTML = '';
  for (let drink of Coffee.drinks) {
    drink.renderCoffee();
  }
}

// const renderCoffee = function(drink) {
//   const drinkElem = document.createElement('li');
//   orders.appendChild(drinkElem);
//   const orderInfoElem = document.createElement('p');
//   orderInfoElem.textContent = `${drink.name} ordered a ${drink.size}oz ${drink.drinkType} with ${drink.milk} milk`;
//   drinkElem.appendChild(orderInfoElem);

// }

Coffee.prototype.renderCoffee = function () {
  const drinkLiElem = document.createElement('li');
  orders.appendChild(drinkLiElem);
  drinkLiElem.textContent = `${this.name} ordered a ${this.size}oz ${this.drinkType} with ${this.milk} milk`;
}


// listen to it to get stuff back
orderForm.addEventListener('submit', handleSubmit);
// render all previous orders to screen

getDrinksFromStorage();
