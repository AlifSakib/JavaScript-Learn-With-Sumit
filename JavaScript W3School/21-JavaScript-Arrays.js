// 21-JavaScript-Arrays.js

let cars = ["Saab", "Volvo", "Bmw"];

//Arrays are also an object . Arrays element can be anything

//By writin index number after array we can access array element

console.log(cars[1]);

// *cars.length
// *cars.sort

// !Accessing the last element of an array

let fruits = ["banana", "Apple", "Mango", "Pinaple"];

console.log(fruits[fruits.length - 1]);

// !ForEach Method

function myFunction(value) {
  console.log("This is a " + value);
}

fruits.forEach(myFunction);

//We can add items in array by using push() and also using array.length method .

// !Interview Questions

// * In JavaScript Arrays use number indexed
// * In JavaScript Object use named index

// As we know Array and Object , if we check type of them both returns Object, So If we want to check array , we Can use Array.isArray() .

// instanceof operator / typeof also an operator

// ? instanceOf

const fruitss = ["Apple", "Banana", "Orange"];

console.log(fruitss instanceof Array);
