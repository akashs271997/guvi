const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var num1 = userInput[0].split(' ').map(val => +val);
//console.log(num1)
for(let i=0; i<num1.length; i++)
{
    if(num1[i]<num1[i+1])
    {
        console.log(num1[i])
        return 0
    }
    else
    {
        console.log(num1[i+1])
        return 0
    }
}


});
