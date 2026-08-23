// var s = 10;
// let e = 10;

// if (true) {
//   let a = "x";
//   console.log(a);
// }
// console.log(a);
// a = "d";
// console.log(a);

// if (true) {
//   var a = "x";
//   console.log(a);
// }
// console.log(a);
// a = "d";
// console.log(a);

// function test() {
//   var a = 10;
//   if (true) {
//     var a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function test() {
//   let a = 10;
//   if (true) {
//     let a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// let f = 10;
// let f = 20;

// var f = 10;
// var f = 20;

// declereshen
// sum(2, 3);
// function sum(a, b) {
//   console.log(a + b);
// }

// // expression
// const sum = function (a, b) {
//   console.log(a + b);
// };
// sum(2, 3);

// // arrow function
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(2, 3);
// const sum = (a, b) => console.log(a + b);
// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

//

let arr = [2, 6, 11, 78, 4, 12];

function filter(arry, callback) {
  let newarry = [];
  for (let i = 0; i < arry.length; i++) {
    const item = arry[i];
    let resalt = callback(item);
    if (resalt) newarry.push(resalt);
  }
  return newarry;
}
function more(num) {
  if (num > 10) return num;
}

// const grog = filter(arr, more);
//or
const grog = filter(arr, (num) => {
  if (num > 10) return num;
});

console.log(grog);

//////////////

function hello(name) {
  console.log("hello " + name());
}
hello(() => {
  return "aria";
});
