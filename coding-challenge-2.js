//coding challenge #2

let markWeight, johnWeight, markHeight, johnHeight;

//test-data-1
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

markBMI = markBMI.toFixed(2);
johnBMI = johnBMI.toFixed(2);

let markHigherBMI = (markBMI > johnBMI);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

if (markHigherBMI){
    console.log(`Mark's(${markBMI}) BMI is higher than John's(${johnBMI})!`);
} else{
    console.log(`John's(${johnBMI}) BMI is higher than Mark's(${markBMI})!`);
}
