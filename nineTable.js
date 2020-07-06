const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var num = userInput[0]
let nine 
let store = []
for(let ind=1; ind<=num; ind++)
{
    nine = ind*9
    store.push(nine)
}
    console.log(store.join(' '))

});
