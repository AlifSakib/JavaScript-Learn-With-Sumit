// 51-JavaScript-this-keyword.js
const person = {
  firstName: "Jhon",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
