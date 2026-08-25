// function istrue(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     resalt = callback(item);
//     if (resalt) return item;
//   }
// }
// function gg(item) {
//   return item > 2 ? true : false;
// }

// console.log(istrue([2, 3, 5, 8], gg));

const ussers = [
  { name: "ali", age: 17 },
  { name: "nima", age: 22 },
  { name: "aria", age: 33 },
];
const namefinde = ussers.find((item) => item.name === "nima")?.age;
console.log(namefinde);
