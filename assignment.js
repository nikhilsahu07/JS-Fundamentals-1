//Values and Variable

const country = "India";
const continent = "Aisa";
let population = 1428;

console.log(country);
console.log(continent);
console.log(population);

//Data types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(language);

//let, const and var

language = "Hindi";
//const variable must have initializer i.e., must have a value
console.log(language);

//Basic Operator

console.log((population / 2) + " millions");
population++;
console.log(population + " millions");

const finlandPopulation = 6;
const avgPopulation = 33;

console.log(population > finlandPopulation);
console.log(population < avgPopulation);

let description = country + " is in " + continent + ", and its "+ (population / 2) + " people speak " + language;
console.log(description);

// Strings and Template Literals

description = `${country} is in ${continent}, and its ${population / 2}
people speak ${language}.`
console.log(description);

//Taking Decisions: if/else statements

if(population > avgPopulation){
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is 22 million below average.`);
}

//Type Conversion and Coercion

console.log('9'-'5'); //4
console.log('19'-'13'+'17'); //614
console.log('123' < 57); //false
console.log(5+6+'4'+9 -4-2); //1143

//Equality Operators: == vs. ===

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1){ //loose equality operator not recommded
    console.log("Only 1 border");
} else if (numNeighbours > 1){
    console.log("More than 1 border");
} else{
    console.log("No borders");
}
