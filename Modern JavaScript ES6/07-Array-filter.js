// "07-Array-filter.js"

var numbers = [1, 2, 3, 4, 5, 6, 10];

let result = numbers.filter(function (currentValue, currentIndex, arr) {
  console.log(currentIndex);
  console.log(arr);
  return currentValue > 2;
}, this);

console.log(result);
