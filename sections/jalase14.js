

// var user ={
//     firstmane:"aria",
//     lastname:"Esmaeilian",
//     age:"24",
//     adress:{
//         contry:"America",
//         city:"Esfahan"
//     },
//     hascar:true,
//     job:["architecter", "engnier"],
// }
// console.log(user.job[1]);
// // or
// console.log(user["fisdtname"]);
// console.log(user["adress"]["city"]);


var restoran={
    name:"papa",
    adress:{
        contry:"iran",
        city:"Tehran"
    },
    menu:{
        category:[
            
                pittza={
                    name:"peperoni",
                    price:"150",
                    stoke:"34",
                },
                berger={
                    name:"chize",
                    price:"120",
                    stoke:"14",
                },
                sandwich={
                    name:"file",
                    price:"220",
                    stoke:"24",
                }
            
        ]
    }
}
console.log(restoran.menu.category[1].price)
console.log(Boolean("1"));
console.log(typeof restoran);