// 71-JavaScript-Object-Maps.js

// self invoked function

(function () {
  console.log("I am A");
})(); // self invoked function or IIFE -> immediately invoked function, Its also an expression

function myFunction(a, b) {
  return a * b;
}

const result = myFunction(3, 4);

console.log(myFunction.toString());
