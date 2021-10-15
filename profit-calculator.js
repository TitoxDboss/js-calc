const cp = parseFloat(prompt('Enter cost price '));
const sp= parseFloat(prompt('Enter selling price'));

const profit_or_loss  = ((sp-cp)/cp)*100


if(profit_or_loss > 0){
console.log(" Your profit is "+profit+"%");
}

if(profit_or_loss < 0){
console.log(" Your loss is "+profit_or_loss*-1+"%");
}


if(profit_or_loss == 0){
console.log(" You made no profit or loss");
}
