// 27-JavaScript-Date-Formats.js

const d = new Date();
console.log(d);
console.log(d.toDateString());
console.log(d.toISOString());

let msce = Date.parse("March 21, 2012");
console.log(msce);

console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth());

console.log(d.setMonth(1));
console.log(d);

const today = new Date();

const someDay = new Date();
someDay.setFullYear(2100, 0, 14);

console.log(today);
console.log(someDay);
