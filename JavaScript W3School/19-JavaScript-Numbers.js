//Javascript only support 15 integers number

let numbers = 99999999999999999999999999999999999;

console.log(numbers);

//Floating point arithmatic are not always accurate when only adding 0.2 + 0.1
// But other floting point arithmatic will work fine.
let x = 0.2 + 0.1;
console.log(x); // 0.30000000000000004

//Number and Strinf adding er somoy String Priority pabe.

// *Sudhu addition er belay mane jog korar somoy string priority pabe but amra jodi onno operator er khetre string ar number dei tahole number priority pabe .

let y = "The string is " + 5 + 10;
console.log(y, typeof y);
let z = 5 + 10 + " The string is ";
console.log(z, typeof z);

let a = 100;
let b = "10";
let c = "c";
console.log(a * b);

// *To check if the value is a number we can use isNaN

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));

//To get base number use .tostring

let d = 100;
console.log(d.toString(2));
console.log(d.toString(10));
console.log(d.toString(16));
console.log(d.toString(32));

// !Interview Question

// 1. Is Nan A Number ? Ans : Yes .
