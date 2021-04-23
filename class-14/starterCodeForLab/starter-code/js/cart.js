/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

//
let localCart = new Cart([]);

//Pull cart from memory
function loadCart() {

  //clearout localCart.items
  localCart.items = [];

  //If these are not proper objects failure point
  const notQuiteCartItems = JSON.parse(localStorage.getItem('savedCart')) || [];

  //For each of the unprocessed CartItems from mememory process them and load iinto local cart
  for(let loadingItem of notQuiteCartItems){

    //get product info
    console.log('product at cart.js');
    console.log(loadingItem.product);
    let loadingProduct = loadingItem.product;
    
    //get quantity
    console.log(loadingItem.quantity);
    let loadingQuantity = loadingItem.quantity;

    //Load into local cart
    localCart.addItem(loadingProduct, loadingQuantity);
  }

}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


//Clear out HTML nodes where we are displaying the data
function clearCart() {

  //Find the table body
  let loadLocationArray = document.getElementsByTagName('tbody');
  let loadLocation = loadLocationArray[0]

  //set inner html to empty
  loadLocation.innerHTML = '';
}

//Create and load HTML nodes into the cart table body area
function showCart() {

  //Find the table body
  let loadLocationArray = document.getElementsByTagName('tbody');
  let loadLocation = loadLocationArray[0];

  //Iterate over the items in the cart
  for (let singleOrder of localCart.items){

    //Setup of tr
    let newRow = document.createElement('tr');

    //Setup td with delete image for clicking later
    let deleteLink = document.createElement('td');
    deleteLink.textContent = 'X';

    //Setup td element with product quantity
    let orderCount = document.createElement('td');
    orderCount.textContent = singleOrder.quantity;

    //Setup td element with product name
    let orderName = document.createElement('td');
    orderName.textContent = singleOrder.product.name;

    //Append all
    newRow.appendChild(deleteLink);
    newRow.appendChild(orderCount);
    newRow.appendChild(orderName);
    loadLocation.appendChild(newRow);

  }
}

//Takes in ChartItem and compares against 
function removeItemFromCart(event) {


  console.log(event.target);

  //From the clicked target element, look up at parent to see the row
  let workingRow = event.target.parentElement;

  //Look at the elements in row
  let rowNodes = workingRow.childNodes;

  //Pulling relevant information from target row
  let targetQuantity = rowNodes[1].textContent;
  let targetName = rowNodes[2].textContent;
  let targetProduct = '';

  //Check name against each product to find the right one for chartItem constructor
  for (let product of Product.allProducts){
    if(product.name === targetName){

      //Setup the product object with correct name for item constructor
      targetProduct = product;
    }
  }

  //Build the CartItem
  let targetCartItem = new CartItem(targetProduct, targetQuantity);

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  //Pull a cart item from that event somehow
  localCart.removeItem(targetCartItem);

  // TODO: Save the cart back to local storage
  localCart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
