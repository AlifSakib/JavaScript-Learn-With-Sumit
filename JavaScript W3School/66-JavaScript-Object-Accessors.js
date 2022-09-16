// 66-JavaScript-Object-Accessors.js

/* 

JavaScript Getter & Setters

*/

// Create an object:
/* const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName); */

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

person.lang = "bn";

console.log(person);
