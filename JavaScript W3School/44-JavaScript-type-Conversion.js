// 44-JavaScript-type-Conversion.js

//! Either we can force javaScript to convert a type or We can do it by JavaScript Automatically.

//? Converting Strings To Number

const num1 = "250";
console.log(Number(num1));

// But if we try to convert a pure string with Number() it will return NaN
// Converting empty string with Number() will return 0

// We Can also convert a string to a number by adding a + sign before it ,
// Example : + "5"

console.log(Number(false));

// !Automatic Type Conversion

console.log(5 + null);
console.log("5" + null);
console.log("5" + 2);
console.log("5" * "2");

//! Automatic String Conversion
