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
let fact =1;
for(let ind=1; ind<=num; ind++)
{
    fact = ind * fact
}
console.log(fact)

});
