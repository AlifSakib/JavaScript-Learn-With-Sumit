// TODO: 16-JavaScript-String-Methods.js

/* 
Length,slice(), substring(), substr(), replace(), toUpperCase(), toLowerCase(), concat(), trim etc
*/

//! As we know string ekta object so string er method o ache .

//! Je ekta object tar method o thakte pare nao thakte pare

//! premitive -> number , string

// ? Scape Character
const str = "this is \\Vaikings\\ Row";
console.log(str);

// JavaScript String slice() & subStr()

let string = "Apple, Banana, Kiwi";

let part = string.slice(7, 13);
console.log(part);

// Slice er somoy amra bole dicchi koto theke koto . ar subStr er belat 1st pera meter hobe koto theke kop dibo eropr and erpor jekhane kop dibo oikhan theke koto ghor jabo.

let string2 = "Apple, Banana, Kiwi";

let part2 = string2.substr(7);
console.log(part2);

// * Replace Method

let text = "Please visit Microsoft!";

let newText = text.replace("Microsoft", "W3School");
console.log(newText);

// replace method doesnot change the main string , it gives a new string
