// 61-JavaScript-Problem-Solving-2.js

/* 

* input : linearSearch(["a","b","c","d","c"],"c")
* output : 2 or "not found"
* problem : linearSearch() function implement korte hobe.

*/

function linearSearch(arr, val) {
  let larr = arr.length;
  for (let i = 0; i < larr; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "Not Found!";
}

console.log(linearSearch(["a", "b", "c", "d", "c"], "f"));

// How to find the biggest string from an Array

function longestString(arr) {
  let compare = " ";

  for (names of arr) {
    if (names.length > compare.length) {
      compare = names;
    }
  }
  return [compare, arr.indexOf(compare)];
}

console.log(longestString(["This is Bangladesh", "No Bangla"]));
