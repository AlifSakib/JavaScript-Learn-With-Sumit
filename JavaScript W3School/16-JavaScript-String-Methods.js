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

// let newText = text.replace("Microsoft", "W3School");
let newText = text.replace(/MICROSOFT/i, "W3School");
console.log(newText);

// replace method doesnot change the main string , it gives a new string

// * JavaScript String concat()

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

console.log(text2.concat(" " + text1));

//All string returns a new string

// String are immutable , unchanged , string can not be changed , only replaced .

// * JavaScript String trim()

// ! to remove unnecessery spaces from text
let text5 = "      Hello World!      ";
let text7 = text5.trim();
let text8 = text5.trimStart();
let text9 = text5.trimEnd();
console.log(text7);
console.log(text8);
console.log(text9);

// * JavaScript String charAt()

let text111 = "HELLO WORLD";

let text123 = text111.charAt(0);
let text124 = text111.charCodeAt(3);
console.log(text124);
console.log(text123);

// CharAt er moddhe index dile oi index er character return kore , ar charCodeAt e index dile character er uicode retrun kore.

let text45 = "HELLO WORLD";
console.log(text45[110]);
console.log(text45.charAt(110));

// Undefined value + Datatype duitai.

// * JavaScript String split()
let text145 = "HELLO WORLD";

console.log(text145.split(","));

//Split always returns an array.
// kono ekta string ke array te convert korte caile amra just oita uor split() method call kore dite pari without giving any perameter , ar jodi perameter dei tahole oi perameter jekhane jekhane pabe oi onujayi sokit() koira dibe .

// And jodi "" erokom dei taile protita element ke array te convert kore dibe .
