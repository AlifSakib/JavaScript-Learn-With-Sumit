// 42-JavaScript-Maps.js

//? A map hold  key value pairs where the keys can be any data-type

// Maps remember the original insertion orde of the key

const map = new Map();
map.set("apple", 300);
map.set("pinaple", 500);
console.log(map);
console.log(map.delete("apple"));
console.log(map);
console.log(map.has("apple"));

map.forEach((key, value) => {
  console.log(key);
});

//! Object vs Map

/* 
Object dont have size property but map has
Object not iterable directly but map is
object keys must be symbold or string , but map keys can be any datatype


*/

console.log(map.entries());
