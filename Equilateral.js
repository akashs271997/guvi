const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let num = userInput[0]
let area = ( Math.sqrt(3)/4 * (num*num) )
console.log(area.toFixed(2))

});
