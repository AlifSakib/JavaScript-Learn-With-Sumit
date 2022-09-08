/* 

* Reguler Expression likhar jonno // forward slash er moddhe likha lage 
* suhdu nam likhle je nam ta ache just 1st match ta dibe , jodi // er por g-flag lagai then shob gula dibe , tarpor oi same letter boro hat er o thakte pare oita paite hoile g-flag er more i-flag dewa lagbe , erpor amra condition o use korte pari /(color|colour) what/

! /\w/gi -> Select All Word
! /\d/gi -> Select all digits
! /\s/gi -> Select Space
! /\W/gi -> Select word chara onno shob kichu
! /\D/gi -> Select Number chara shob select korbe without new line
! /\S/gi -> Select White Space chara baki shob kichu.
! /\t/gi -> Select tab
! /\n/gi -> Select new line
! /\./gi -> Select All Charecter

? Use of third bracked

Example : 

! /[abc]/gi -> tin tar moddhe jekono ekta select korbe.

! /[a-z] -> a theke z shob select korbe , range o dewa jabe .

! /[a-gA-Gj-lJ-L] -> range 

! [^abc] -> ABC chara shob select koro 

? Useing Quantity

! /colou?r /gi
! /colou?r* /gi
! /colou?r+ /gi
! /colou?r{2} /gi
! /colou?r{1,3} /gi
! /colou?rs\? /gi
! /^My/
! /he he!$/
!^[0-9]
! /^word/
! /!/gim




*/

const text = "#2A2A2A";
const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const matches = text.match(regex);

const index = text.search(regex);

const replaced = text.replace(regex, "#000000");

const testing = regex.test(text);

console.log(matches, index, replaced, testing);
