var number = 45;
if(number % 2===0){
    console.log("add")
}else{
    console.log("evan")
};
// or
console.log(number% 2===0 ? "add" : "even")


var card =[
    {name: "laptap" , price: 85 },
    {name: "mouse" , price: 34 },
    {name: "keyboard" , price: 49 }
]
if(card[0].price + card[1].price + card[2].price > 100){
    console.log((card[0].price + card[1].price + card[2].price)*0.9)
}else{
    console.log(card[0].price + card[1].price + card[2].price )
}
// or
console.log(card[0].price + card[1].price + card[2].price > 100 ? 
    (card[0].price + card[1].price + card[2].price)*0.9 :
    card[0].price + card[1].price + card[2].price )


var weakDays = 5;   
switch (weakDays) {
    case 3:
    case 4:
        console.log("soon weakend")
        break;
    case 5:
    case 6:
        console.log("weakend")
        break;
    default:
        console.log("loking for weakend")
        break;
}          