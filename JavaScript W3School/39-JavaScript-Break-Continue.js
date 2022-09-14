// 39-JavaScript-Break-Continue.js

const arr = [100, 500, 6660, 400, 500, 400];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 400) {
    break;
  } else {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// JavaScript Lavels

const cars = ["BMW", "Volvo", "Saab", "Ford"];
