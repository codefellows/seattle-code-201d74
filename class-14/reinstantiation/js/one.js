'use strict';

if (localStorage.cats) {
  const catsFromLS = JSON.parse(localStorage.cats);
  console.log(catsFromLS);
  // catsFromLS is now an array of generic objects
  for (let i = 0; i < catsFromLS.length; i++) {
    // this is reinstantiation
    new Cat(catsFromLS[i].name);

    allCats[i].render();
  }
  console.log(allCats)
}

catform.addEventListener('submit', handleCatSubmit);
