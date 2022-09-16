// 67-JavaScript-Object-Constructors.js

class Person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }
}

const rahim = new Person("rahim", "hasan", 25);
console.log(rahim.fullName());
console.log(rahim);
