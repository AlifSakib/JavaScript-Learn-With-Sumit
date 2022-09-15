// 41-JavaScripts-Sets.js

// Set e sudhu ekta value ekbar i thakte pare .

/* 

! Set Methods

* new Set() -> set create korte new Set() evabe likha lagbe
* add()
* delet()
* has()
* forEach()
* value()

? Property

* size()

*/

const arr = [1, 2, 2, 3, 4, 5, 6];

const set = new Set(arr);
set.add(10);
set.forEach((item) => {
  console.log(item);
});

// we can also add value in a set using variable

const a = 11;
const b = 15;
const c = 1;

set.add(a);
set.add(b);
set.add(c);

console.log(arr);
console.log(set);
