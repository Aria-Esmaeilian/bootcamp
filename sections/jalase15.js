// var user = {
//     name:"aria",
//     lastname:"esmaeilain",
//     age:24,
// }
// if (user.age>18){
//     console.log("yiu are mor than 18")
// }else{
//     console.log("you are yonger than 18")
// }
// console.log("condition has been cheked")

// var student =[
//     {
//         age:"24",
//         score:20,
//     },
//     {
//         age:"24",
//         score:16,
//     },
//     {
//         age:"14",
//         score:10,
//     },
//     {
//         age:"20",
//         score:18.5,
//     },
//     {
//         age:"19",
//         score:19,
//     },
// ]
// if(student[0].score + student[1].score + student[2].score + student[3].score >80){
//     console.log("you can enter mathe class")
// }else{
//     console.log("you are asshole")
// }
// console.log(student[0].score + student[1].score + student[2].score + student[3].score)

var student =[
    {
        age:24,
        score:20,
    },
    {
        age:24,
        score:16,
    },
    {
        age:34,
        score:10,
    },
    {
        age:21,
        score:18.5,
    },
    {
        age:19,
        score:19,
    },
]
if(student[0].age<20 && student[1].age<20 && student[2].age<20 && student[3].age<20){
    console.log("you can ant enter mathe class")
}else if(student[0].age<40 && student[1].age<40 && student[2].age<40 && student[3].age<40){
    console.log("you can ant enter mathe class by test")
}
else{
    console.log("you can do it now")
}

// var cantry = "irani";
// var age = "22";
// if(cantry==="irani" && age>=18){
//     console.log("you can do it")
// }

// var cantry = "irani";
// var age = "39";
// if(cantry==="irani"){
//     if(age>=18){
//         console.log("you are irani and you are more than 18")
//     }else{
//         console.log("you are irani and you are less than 18")

//     }
// }else{
//         console.log("you are not irani")

// }
// var member = false;
// console.log(member === true ? "its member" : "its not member");
var cantry = "iran";
var city = "esf";
console.log(cantry==="iran" && city==="esf" ? city==="esf" ? 
            "contry is iran and city is esfahan" : "contry is iran and city is nat esfahan" :
             "contry is nao iran")
             
var student =[
    {
        age:24,
        score:20,
    },
    {
        age:24,
        score:16,
    },
    {
        age:34,
        score:10,
    },
    {
        age:21,
        score:18.5,
    },
    {
        age:19,
        score:19,
    },
]                 
switch (true){
    case student[0].age<12:
        console.log("smale");
        break;
    case student[0].age<20:
        console.log("medume");
        break;
    case student[0].age<40:
        console.log("big");
        break;
    default:
        console.log("biger")
        break;
}