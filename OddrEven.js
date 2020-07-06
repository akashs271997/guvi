const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let num = userInput[0];
num = Math.round(num)
if(num === 0)
{
    console.log("Zero")
    return 0
}
if(num%2 === 0) 
{
    console.log("Even");
    
}
else
{
    console.log("Odd");
}

});
