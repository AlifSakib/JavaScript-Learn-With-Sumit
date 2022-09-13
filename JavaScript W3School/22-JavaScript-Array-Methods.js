// 22-JavaScript-Array-Methods.js

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());

// The join() method also joins all array elements into a string. but we can define with what we can to join

console.log(fruits.join(" "));

// pop returns the value and we can store the valuse too in a new variable

// !Shifting Element

// shift() removes the from the 1st element of an Array
// unshift() take a value that we want to add beginig of an array
// delet keyword use ffor delet element from array
// deleting an element from array leave the removed element space as empty

// !Splice

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(3, 0, "Lemon", "Kiwi");

console.log(fruits);

// solice() also return the value

// !.concat() used for add two array

// !Slice() to slice an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var nFruits = fruits.slice(1, 3);
console.log(nFruits);
