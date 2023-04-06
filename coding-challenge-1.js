// Coding Challenge #1

let markWeight, johnWeight, markHeight, johnHeight;

//test-data-1
// markWeight = 78;
// markHeight = 1.69;
// johnWeight = 92;
// johnHeight = 1.92;

// test-data-2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = (markBMI > johnBMI);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log(markHigherBMI);
