// 63-JavaScript-Object-Properties.js

const person = {
  name: "sumit",
  age: 35,
};

let a = "ag";
person.country = "Bangladesh";
person["Color"] = "white";
person[a] = 54;
// console.log(person);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

/* for (items in myObj.cars) {
  console.log(myObj.cars[items].models);
} */
