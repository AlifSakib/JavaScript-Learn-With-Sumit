// 75-JavaScript-Function-call.js

/* 

* JavaScript e shob function i ki method ? Answer : Yes , karon shob function i window object er moddhe ache .

*/

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "Dhaka", "Bangladesh"));
console.log(person.fullName.apply(person2, ["London", "Europe"]));

const arr = [1, 2, 3];
console.log(Math.max.apply(null, arr));
console.log(Math.max.apply(Math, arr));
console.log(Math.max.apply(0, arr));
