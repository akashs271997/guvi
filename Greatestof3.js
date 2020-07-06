const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let num1 = userInput[0]
let num2 = userInput[1]
let num3 = userInput[2]
if( (num1 > num2) && (num1 > num3) )
{
    console.log(num1)
}
else if(num2 > num3)
{
    console.log(num2)
}
else
{
    console.log(num3)
}
});
