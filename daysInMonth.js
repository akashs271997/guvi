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
if( (num<12) && (num=0) )
{
    if(num == 2)
    {
        console.log("28")
    }
    else if( (num%2!=0) && (num<=7) )
    {
        console.log("31")
    }
    else if( (num%2==0) && (num<=7) )
    {
        console.log("30")
    }
    else if( (num%2!=0) && (num>=8) )
    {
        console.log("30")
    }
    else if( (num%2==0) && (num>=8) )
    {
        console.log("31")
    }
}
else
{
    console.log("Error")
}

});
