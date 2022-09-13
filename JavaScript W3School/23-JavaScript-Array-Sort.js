// 23-JavaScript-Array-Sort.js

// ?The sort() method sorts an array alphabetically:
// ?The reverse() method reverses the elements in an array.

// !When we want to sort a array which contain numbers it will not sort the numbers corectly because he calculate number as string so for that we will use a function inside they sort() ->

// this is for assending format
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// array descending:
const point = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

const pointss = [40, 100, 1, 5, 25, 10];

pointss.sort(function (a, b) {
  return 0.5 - Math.random();
});

console.log(pointss);

//! Fisher Yates Method

//? Later Watch

//! Math.max.apply()

const pointsss = [40, 100, 1, 5, 25, 10];

console.log(Math.max.apply(null, pointsss));
console.log(Math.min.apply(null, pointsss));

//! Sorting Object Arrays

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(cars);

cars.sort(function (a, b) {
  x = a.type.toLowerCase();
  y = b.type.toLowerCase();

  if (x > y) {
    return 1;
  } else {
    return -1;
  }
  return 0;
});

console.log(cars);
