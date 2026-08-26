// push - pop - shift - unshift - find - some - every - sort - slice - map
const array = [1, 2, 3];

const res = array.push(4, 5, 6);
console.log(res);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift(-1, 0);
console.log(array);

const nums = [1, 2, 3, 4, 5];
const a = nums.find((item) => item > 3);
console.log(a);

const fruits = ["orange", "apple", "pineapple", "strawberry"];
console.log(fruits.find((a) => a === "apple"));

const users = [
  { name: "nima", age: 20, birthdate: "14050602" },
  { name: "pouya", age: 22, birthdate: "14050702" },
  { name: "maryam", age: 18, birthdate: "14051002" },
];
// const user = users.find((a) => a.name === "pouya")?.age;
// console.log(user);
const user = users.find((e) => e.birthdate === "14051002");
if (user) console.log(`happy bearth day to ${user.name}`);

console.log(users.some((u) => u.name === "maryam"));
console.log(
  "even",
  nums.some((n) => n % 2 === 0),
);

const isAllow = users.every((u) => u.age >= 18);
if (isAllow) console.log("Allowwwwww");

console.log(fruits.includes("strawberry"));

console.log(nums.slice(2, 4));

const newArray = nums.map((item) => item * 2);
console.log(newArray);
