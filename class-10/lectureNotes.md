# Lecture Notes

## Hoisting
- 2 passes are made
  - first pass
    - variable names get stored in memory 
      - we don't look at the assignmnet
    - functions are declared but not read
      - parameters are noted
  - second pass
    - executes the code
      - assignments are read and evaluations are done

fruitloops()

function fruitloops() {

}

## debugging code 
### debugger statement 
- line of code you can put in your javascript to set a breakpoint in the browser debugger tool
- use it when you think you might be doing something sketchy
- https://googlechrome.github.io/devtools-samples/debug-js/get-started

### reading error messages in our console
- follow back to the line and file where we had the error

### console.logs
- plant well written notes to ourselves and the current value of a variable