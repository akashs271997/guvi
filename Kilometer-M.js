const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 

let num = userInput[0];
let meter = num * 1000;
let centi = num * 100000;
console.log(meter);
console.log(centi);
//end-here
});

