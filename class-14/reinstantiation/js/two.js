'use strict';

const catbutton = document.getElementById('catbutton');

const handleCatButtonClick = function(){
  let myVal = localStorage.getItem('cats')
  console.log(myVal);
  console.log(localStorage.cats);
  // if (localStorage.cats) {
    const catsFromLS = JSON.parse(localStorage.cats);
    console.log('allCats array after retrieving from local storage', allCats);
    for (let i = 0; i < catsFromLS.length; i++){
      const newCat = new Cat(catsFromLS[i].name);
      newCat.render();
    }
    console.log('allCats array after reinstantiating through our Cat constructor', allCats);
  // } else {
  //   console.log('you have nothing in storage');
  // }
};

catbutton.addEventListener('click', handleCatButtonClick);
