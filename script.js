// alert("Hello world..!"); //alert msg from the website
// console.log(12+13-10); //output msg on the devtools console

// values and variables

let firstName = "Nikhil"; //strings
let hisAge = 19; //number integers or decimals
let eitherWorks = false; //boolean type
let PI = 3.1415; //real constants so all caps
let eligibleForVote; //undefined data types
// console.log(hisAge);
// console.log(firstName);
// there are also bigint and symbol and null but not get that much in handy
// javascript has a dynamic typing i.e., it doesn't require to provide data types
// more importantly... In javascript values assigned have datatypes, not the variables

// typeof Operator

let isJavascriptFun = true;
// console.log(typeof firstName);
// console.log(typeof hisAge);
// console.log(typeof eitherWorks);
// console.log(typeof PI);
// console.log(typeof eligibleForVote);
console.log(typeof isJavascriptFun);

isJavascriptFun = "Yes!"; 
console.log(typeof isJavascriptFun);

let nightParty;
console.log(nightParty);
console.log(typeof nightParty);

console.log(typeof null); //legacy bug of js