const cp = parseFloat(prompt('Enter cost price '));
const sp= parseFloat(prompt('Enter selling price'));
var  expenses = parseFloat(prompt('Enter your expenses'));
const profit_or_loss  = ((sp-cp)/cp)*100


if(profit_or_loss > 0){
console.log(" Your gross profit is "+Math.abs(profit_or_loss - expenses)+"%");
}

if(profit_or_loss < 0){
console.log(" Your gross  loss is "+Math.abs((profit_or_loss*-1) - expenses)+"%");
}


if(profit_or_loss == 0){
console.log(" You made no profit or loss");
}


