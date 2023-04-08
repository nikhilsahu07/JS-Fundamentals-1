//coding challenge #4

let bill = Number(prompt("What's your bill Steven? "));

let tip;
// this tip is initailzed in another line beacuse we can't give tip value before intializing that.
tip = bill>=50 && bill<= 300 ? tip = .15*bill : tip = .20*bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
