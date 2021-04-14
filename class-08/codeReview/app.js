// in my example footer is my tfoot element I created earlier in the page

function createFooter(footer) {
  //create a row in your table
  let trElem = document.createElement('tr');
  // append the row to the footer/ or table if you didn't make a footer
  footer.appendChild(trElem);
  // create a header cell and put the word totals in it
  const thElem = document.createElement('th');
  thElem.textContent = 'Totals';
  // append the header cell
  trElem.appendChild(thElem);

  // create a variable to hold your daily total for all stores
  let grandTotal = 0

  // outer for loop moves through the hours of opperation 
  for (let i = 0; i < hoursOfOpperation.length; i++) {
    //declare a variable to hold totals per hour, this resets to zero every time we move to a new hour of the day
    let hourlyTotal = 0;
    // inner for loop moves through each cookie store and looks at their hourly sales array - which is the same length as the hours of opperation
    for (let j = 0; j < CookieStore.stores.length; j++) {
      // update the hourly total with that stores sale for that hour... ie: seattle hourly sales at 6am
      hourlyTotal += CookieStore.stores[j].hourlySales[i];
    }
    // update the daily total for all stores with the total for the last hour
    grandTotal += hourlyTotal;
    // create a data cell and add the houly total as the text content
    let tdElem = document.createElement('td');
    tdElem.textContent = hourlyTotal;
    // append the data cell to the row
    trElem.appendChild(tdElem);
  } 
  // outside both loops add a cell for the grand total for the day and put text content in that reflects that total
  let tdGTElem = document.createElement('td');
  tdGTElem.textContent = grandTotal;
  // append that cell
  trElem.appendChild(tdGTElem);
}