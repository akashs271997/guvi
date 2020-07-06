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
let result = []
for(let ind=1; ind<=3; ind++)
{
    let store= ind*num
    result.push(store)
   // console.log(store)
}
console.log(result.join(' '))
});
