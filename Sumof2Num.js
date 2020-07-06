const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var num1 = +userInput[0]
var num2 = +userInput[1]
var sum = num1+num2
console.log(sum.toFixed(1))

});
