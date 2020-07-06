const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var year = userInput[0]
if(year%2===0)
{
    console.log('Y')
}
else
{
    console.log('N')
}

});
