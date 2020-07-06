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
let cir = ( 2*3.141592653589793238*num ) 
if(cir<0)
{
    console.log("Error")
}
console.log(cir.toFixed(2))

});
