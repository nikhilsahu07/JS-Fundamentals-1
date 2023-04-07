//Coding challenge 3

// Data-1

//Dolphins
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

//Koalas
// const koalasScore1 = 88;
// const koalasScore2 =91;
// const koalasScore3 =110;

//bonus-1
const minScore = 100;

//data- Bonus-1

//Dolphins
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

//Koalas
// const koalasScore1 = 109;
// const koalasScore2 =95;
// const koalasScore3 =123;

//bonus-2

let isGreaterThanMinScore;
isGreaterThanMinScore >= minScore;

//data bonus-2

//Dolphins
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

//Koalas
const koalasScore1 = 109;
const koalasScore2 =95;
const koalasScore3 =106;

const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
const avgKoalas = (koalasScore1 + koalasScore2 + koalasScore3)/3;

//test-results
// console.log(avgDolphins.toFixed(2));
// console.log(avgKoalas.toFixed(2));

if (avgDolphins > avgKoalas && avgDolphins >= minScore){
    console.log(`Team Dolphins ${avgDolphins.toFixed(2)} wins the trophy🏆.!`);

} else if (avgKoalas > avgDolphins && avgKoalas >= minScore){
    console.log(`Team Koalas ${avgKoalas.toFixed(2)} wins the trophy🏆.!`);

} else if (avgDolphins === avgDolphins && isGreaterThanMinScore){
    console.log(`The match is DRAW ${avgKoalas.toFixed(2)}..!`);
} else {
    console.log(`No One wins the trophy... Not Qualified! ${avgDolphins.toFixed(2)}`);
}
 