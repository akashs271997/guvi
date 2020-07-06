const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let cel = userInput[0]
store = ( (cel * 9/5) + 32 )
console.log(store)
});
