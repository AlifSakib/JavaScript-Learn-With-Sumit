// 31-Problem-Solving-1.js
// !Write a function that can print any random number between any two given numbers (including them).

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

console.log(random(5, 9));

//! How can you order roll numbers of students in your class sequentially?

const rolls = [10, 50, 2, 7, 1, 9, 45, 30];

const sorted = rolls.sort(function (a, b) {
  return a - b;
});

console.log(sorted);
//! How can you order names of students in your class sequentially?

const names = ["Rafiq", "Munib", "Antor", "Abdar", "Karim", "Doller"];

console.log(names.sort());

const object = [
  { name: "Jabbar", age: 24 },
  { name: "Monir", age: 10 },
  { name: "Sumit", age: 55 },
];

object.sort(function (a, b) {
  x = a.name.toLowerCase();
  y = b.name.toLowerCase();

  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});

console.log(object);

object.sort(function (a, b) {
  return a.age - b.age;
});

console.log(object);

//! Write a function that can tell us whether an year is a leap year or not.

//! How would you determine the number of vowels in a sentence?

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function checkVowels(sentence) {
  let count = 0;

  const letters = Array.from(sentence);

  letters.forEach(function (letter) {
    if (vowel.includes(letter)) {
      count++;
    }
  });

  return count;
}

console.log(checkVowels("I Love Bangladesh"));
//! How would you extract the duplicate numbers in an array?

const numbers = [1, 2, 3, 1, 2, 4, 5, 5, 4, 4, 5, 7, 8, 6, 5, 2, 14];

const findDublicate = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(findDublicate);
//! How would you extract the unique numbers in an array?
