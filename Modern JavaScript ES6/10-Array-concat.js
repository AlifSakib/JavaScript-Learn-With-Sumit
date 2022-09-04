// 10-Array-concat.js

const number1 = [1, 2, 3, 4, 5, 6];
const number2 = [7, 8, 9, 10, 11, 12];

let result = number1.concat(number2);

console.log(number1);
console.log(number2);
console.log(result);

// Array .Concat returns a new array and dosent change the main array

const number3 = [1, 2, 3, 4, 5, 6];
const number4 = [7, 8, 9, 10, 11, 12];
const number5 = [7, 8, 9, 10, 11, 12];
const number6 = [7, 8, 9, 10, 11, 12];

let result2 = number1.concat(number3, number4, number5, number6);

console.log(result2);

// If we have multiple array then we can add them seperating by coma.
