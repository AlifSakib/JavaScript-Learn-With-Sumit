// 30-JavaScript-Math.js

// !Math Properties (Constants)

Math.E; // returns Euler's number
Math.PI; // returns PI
Math.SQRT2; // returns the square root of 2
Math.SQRT1_2; // returns the square root of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10
Math.LOG2E; // returns base 2 logarithm of E
Math.LOG10E; // returns base 10 logarithm of E

//Math.round(x); //Returns x rounded to its nearest integer
//Math.ceil(x); //Returns x rounded up to its nearest integer
//Math.floor(x); //Returns x rounded down to its nearest integer
//Math.trunc(x); //Returns the integer part of x (new in ES6) will remove
////points and return a whole number .
//
//Math.sign(x); //returns if x is negative, null or positive:

console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));
console.log(Math.abs(-5));
// console.log(Math.sin());
// console.log(cos());
// console.log(Math.max());
// console.log(Math.min());

console.log(Math.random());

//? Math.random()

const random = Math.floor(Math.random() * 10) + 1;
console.log(random);

//* A proper Random Function

function getRandomIntegers(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

console.log(getRandomIntegers(5, 10));
