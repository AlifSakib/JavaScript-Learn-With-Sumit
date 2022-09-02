// "06-Array-findIndex.js"

// ! Array.prototype.findIndex

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.findIndex((currentValue, currentIndex, arr) => {
  return currentValue > 20;
});

console.log(result);

// etar khetreo this pass kora jay find er moto

/* 
! Definition and Usage

The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array. */
