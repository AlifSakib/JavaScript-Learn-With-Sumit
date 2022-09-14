// 36-for-in-loop.js

const person = { fname: "John", lname: "Doe", age: 25 };

for (let properties in person) {
  console.log(person[properties]);
}

const numbers = [45, 4, 9, 16, 25];

for (let items in numbers) {
  console.log(numbers[items]);
}
