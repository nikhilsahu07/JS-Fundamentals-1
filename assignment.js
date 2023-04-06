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
