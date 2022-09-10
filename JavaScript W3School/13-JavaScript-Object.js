//TODO: 13-JavaScript-Object.js

let car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",

  start: function () {
    this.drive();
    console.log("Car Has Started");
  },
  drive: function () {
    console.log("Car Is Driving");
  },
};

car.start();
console.log(car.name);
console.log(car["model"]);

let person = {
  firstName: "Jhon",
  lastName: "Doe",
  id: 5666,
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

let firstName = person.fullname();
console.log(firstName);

let x = new String("Rahim");

console.log(x);

//! object er peoperty jokhon kono function oy tokhon oi function ke method bola hoy

//! Object ke kokhono === diye compare kora jay na , mainly duita object ke kokhonoi compare kora jay na , so comparing two object will always return false

//dot sign diye jeta call kori oita hocche property

let text = "there are a lot of Programing language without JS";

console.log(text);
