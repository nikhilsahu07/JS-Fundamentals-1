// alert("Hello world..!"); //alert msg from the website
// console.log(12+13-10); //output msg on the devtools console

// values and variables

// let firstName = "Nikhil"; //strings
// let hisAge = 19; //number integers or decimals
// let eitherWorks = false; //boolean type
// let PI = 3.1415; //real constants so all caps
// let eligibleForVote; //undefined data types
// console.log(hisAge);
// console.log(firstName);
// there are also bigint and symbol and null but not get that much in handy
// javascript has a dynamic typing i.e., it doesn't require to provide data types
// more importantly... In javascript values assigned have datatypes, not the variables

// typeof Operator

// let isJavascriptFun = true;
// console.log(typeof firstName);
// console.log(typeof hisAge);
// console.log(typeof eitherWorks);
// console.log(typeof PI);
// console.log(typeof eligibleForVote);
// console.log(typeof isJavascriptFun);

// isJavascriptFun = "Yes!"; 
// console.log(typeof isJavascriptFun);

// let nightParty;
// console.log(nightParty);
// console.log(typeof nightParty);

// console.log(typeof null); //legacy bug of js

// just like let there are 'const' and 'var' keywords for declaring variables
// const birthYear = 2004;
// birthYear = 2003; //can't assigned cause its a const
// just for now, let is block declaring and var is function declaring type 

// Operators

//arithmetic operators- comparison- string
// const birthYearNicks = 2004;
// const birthYearRiya = 2003;
// const now = 2023;
// console.log(now - birthYearNicks);
// console.log(now - birthYearRiya);

// let isEligibleForVote = 18;
// console.log(birthYearNicks >= isEligibleForVote);
// console.log(birthYearRiya >= isEligibleForVote);

// isEligibleForVote++;
// isEligibleForVote--;
// isEligibleForVote--;
// console.log(isEligibleForVote);

// let firstName = "Nikhil";
// let lastName = "Sahu";
// console.log(firstName + " " + lastName);

// console.log(now - birthYearNicks < now - birthYearRiya);

// let hisName = firstName += lastName;
// console.log(hisName);

// console.log(2**3);

//Operator precendence

// const birthYearNicks = 2004;
// birthYearRiya = 2003;
// const now = 2023;
// let ageNicks, ageRiya;
// ageNicks = now - birthYearNicks;
// ageRiya = now - birthYearRiya;

// let averageAge;
// averageAge = (ageNicks + ageRiya)/2; //grouping has highest precedence
// console.log(averageAge);

// let x,y;
// x=y=10; // equal operator has precendence left to right
// console.log(x+y);

//String template and literals

// const firstName = "Nikhil";
// const lastName = "Sahu";
// let work = "Student";
// let programmingLang = "Javascript";

// console.log(firstName + lastName + " is a " + work + ".\n"
// + "He is also learning " + programmingLang + ".");

// console.log(`${firstName} ${lastName} is a ${work}.
// He is also learing ${programmingLang}.`); //back-tick is a multiline string supporter

//Taking Decisions: if/else statements

// let ageRiya = 20;

// if (ageRiya >= 18){
//     console.log(`As she is ${ageRiya} year old, 
// she is eligible for driving license.`);

// } else{
//     console.log(`As she is ${ageRiya} year old,
// she is not eliglible and have to wait for ${18-ageRiya} years more.`);
// }

// const birthYear = 2003;

// if (birthYear<=2000){
//     century = "20th";
// } else {
//     century = "21st";
// }
// console.log(`She born in ${century} century.`);

//Type conversion

// let randomYear = '1991';

// console.log(randomYear + 1);
// console.log(randomYear - 1);
// console.log(Number(randomYear), randomYear);

// console.log(String(23), 23);
// console.log(typeof(Number('Nicks')));

//type coerion

// console.log('I am ' + 19 + ' year old.');
// console.log(12 + '12');
// console.log('23'- '10' + 3);
// console.log('13' - 3);
// console.log('12' * 2);
// console.log('5' / 2);

// let n = '1' + 1; // '11'
// n = n - 1;  //10
// console.log(n); // '-' operator changed the string to number

// Falsy values - 5 are: 0, null, NaN, Undefined, ''

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Nicks"));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;

// if (money){
//     console.log("Don't spend it all..!");
// } else{
//     console.log("Get some job..!");
// }

// let height;

// if(height){
//     console.log("Height is defined..!");
// } else {
//     console.log("Height is UNDEFINED..!");
// }

//Equality operators == vs ===

// const yourAge = '18';
// if (yourAge == 18) console.log("You're an adult now :D (loose)");

// if (yourAge === 18) console.log("You're an adult now :D (strict)");

// let favNumber = Number(prompt("What's your favourite number:"));
// if (favNumber === 23){
//     console.log("Nice choice you've..😉");
// } else if (favNumber === 9){
//     console.log("That's also a good choice..👌");
// } else if (favNumber === 80085){
//     console.log("You are legend in choice..👀");
// } else{
//     console.log("Why not 23 your favourite??☹️");
// }
// if (favNumber !== 23) console.log("Not a 23..!");

//Logical Operators

// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision){
//     console.log("Nick is able to drive.");
// } else{
//     console.log("Someone else should drive.!");
// }
// const isTired = false; //C

// console.log(hasDriverLicense && hasGoodVision && isTired);
// if (hasDriverLicense && hasGoodVision && !isTired){
//     console.log("Nick is able to drive.");
// } else{
//     console.log("Someone else should drive.!");
// }

//Switch Statements

// test-days
// const day = 'monday';
// const day = 'tuesday';
// const day = 'wedensday';
// const day = 'thursday';
// const day = 'friday';
// const day = 'saturday';
// const day = 'sunday';
// const day = 'alienday';

// switch (day) {
//     case 'monday':
//         console.log("Learn from programming theories..!");
//         console.log("Do revision of previous learned programs..!");
//         break;
//     case 'tuesday':
//         console.log("Do your coding courses..!");
//         break;
//     case 'wedensday':
//     case 'thursday':
//         console.log("Practice courses and do more projects..!");
//         break;
//     case 'friday':
//         console.log("Search for more carrier options and apply..!");
//         break;
//     case 'saturday':
//         console.log("Do more open source contribution and improve yoour profile..!");
//         break;
//     case 'sunday':
//         console.log("Attend coding meetup, meet with people of same interest..!");
//         break;
//     default:
//         console.log("Have rest... I don't think you  even exits..Alien!!");
//         break;
// }

//alternative if-else statements

// const day = 'thursday';

// if(day === 'monday'){
//     console.log("Learn from programming theories..!");
//     console.log("Do revision of previous learned programs..!");
// } else if (day === 'tuesday'){
//     console.log("Do your coding courses..!");
// } else if ( day === 'wedensday' || day === 'thursday'){
//     console.log("Practice courses and do more projects..!");
// } else if (day === 'friday'){
//     console.log("Search for more carrier options and apply..!");
// } else if (day === 'saturday'){
//     console.log("Do more open source contribution and improve yoour profile..!");
// } else if(day === 'sunday'){
//     console.log("Attend coding meetup, meet with people of same interest..!");
// } else{
//     console.log("Have rest... I don't think you  even exits..Alien!!");
// }
