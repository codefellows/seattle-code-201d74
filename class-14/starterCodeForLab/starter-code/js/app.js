'use strict';

//Only this code is available to both pages due to HTML links
//Touche marketing team and your un-willingness to change the HTML
//====================Constructor====================

//Cart constructor
  //Containing CartItems
    //CartItems are a Product object and a quantity
      //Products have name and file path

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  // Have to already be cart items, can't take directly from memory
  this.items = items;
};

//Add a product and quantity associated with it
Cart.prototype.addItem = function(product, quantity) {
  
  //Call constructor and push into the local cart
  let newItem = new CartItem(product, quantity);
  console.log('product at app.js')
  console.log(product);
  this.items.push(newItem);

};

//Save local cart to storage
Cart.prototype.saveToLocalStorage = function() {

  //Look at this carts "items" array
  localStorage.savedCart = JSON.stringify(this.items);
};

//What if you had to pass in the literal full item object to make comparison easier
Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!

  //Look through the items array of this.Cart
  for (let i = 0; i < this.items.length; i++){

    //If the same remove current index, and change i to reflect everything in array shifting
    console.log(this.items[i]); //hasn't been run through a constructor
    console.log(item); //this is cart item
    if(item == this.items[i]){

      //In the local cart splice 
      this.items.splice(i,1)

      //Decrease i to keep up with array index's shifting due to removal of object
      i--;
    }

  }

};

// CartItem Constructor
const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};


//====================Constructor Calling====================

Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}


//====================Setup====================
// Initialize the app by creating the big list of products with images and names
generateCatalog();

//A cart to play with
let testItems = [];

for (let i = 0; i < 5; i++){
  let testItem = new CartItem(Product.allProducts[i],(i+1));
  testItems.push(testItem);
}

let testCart = new Cart(testItems);
testCart.saveToLocalStorage();
