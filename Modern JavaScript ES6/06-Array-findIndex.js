// "06-Array-findIndex.js"

// ! Array.prototype.findIndex

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.findIndex((currentValue, currentIndex, arr) => {
  return currentValue > 20;
});

console.log(result);

// etar khetreo this pass kora jay find er moto
