// var studnts = [
//   {
//     name: "aria",
//     scoure: [14, 20, 13, 16],
//   },
//   {
//     name: "ali",
//     scoure: [18, 20, 10, 12],
//   },
//   {
//     name: "sara",
//     scoure: [13, 19, 12, 17],
//   },
// ];
// function dady() {
//   for (var i = 0; i < studnts.length; i++) {
//     var jam = [];
//     for (var j = 0; j < studnts[i].scoure.length; j++) {
//       jam.push(studnts[i].scoure);
//     }
//   }
//   return `${studnts[i].name} : ${jam}`;
// }
// console.log(dady());

//همه نمره هارو بگیر هر اسم چه معدل  داره و با یک فانکشن دیگه بگو بهترین معدل مال کی بوده

// var element = document.getElementById("p1");
// console.log(element.innerText);

// element.innerText = "my text";

// console.log(element.attributes);

// /////////////////////////////////

// var element2 = document.getElementById("p2");
// console.log(element2.innerText);
// element2.innerText = "solaaaaam";
// console.log(element2.attributes);

// var elements = document.getElementsByTagName("p");
// for (var i = 1; i < elements.length; i++) {
//   elements[i].innerText = i;
// }
// console.log(elements);

var pp = document.getElementById("p1");
pp.setAttribute("class", "redtext");
