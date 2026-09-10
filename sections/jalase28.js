// const car1 = {
//   name: "camry",
//   brand: "toyota",
// };

// const car2 = Object.assign({}, car1);
// car2.name = "landcroser";
// console.log(car1);
// console.log(car2);

//or

// const car2 = { ...car1 };
// car2.name = "landcroser";
// console.log(car1);
// console.log(car2);
//if we have arry we shold do [...]and for object {...}
//and also you can add more than one for ex {... , ...}

// const user = {
//   name: "aria",
//   age: 24,
// };
// const addres = {
//   contry: "iran",
//   city: "esfahan molasdra",
// };

// const informotion = { ...user, ...addres };
// console.log(informotion);

// const use2 = { ...user, name: "ali" };
// console.log(use2);

// class Car {
//   constructor(name, brand) {
//     this.name = name;
//     this.brand = brand;
//     displaycar(){
//         console.log(`this car is ${this.name} ${this.name}`)
//     }
//   }
// }
// const car1 = new Car("camery", "toyota");
// const car2 = new Car("camery2", "toyota2");
// const car3 = new Car("camery3", "toyota3");
// console.log(car1, car2, car3);

// class Product {
//   constructor(name, price, tax) {
//     this.name = name;
//     this.price = price;
//     this.tax = tax;
//   }
//   taxshow() {
//     console.log(`the tax is ${this.price + this.price * this.tax}`);
//   }
// }
// const prod1 = new Product("mobile", 200, 2);
// const prod2 = new Product("mobile2", 100, 4);
// const prod3 = new Product("mobile3", 300, 10);
// console.log(prod1, prod2, prod3);
// prod1.taxshow();

// const now = new Date();
// console.log(now);

//1970-01-01

// const ts = Date.now();
// console.log(ts);

// console.log(now.toLocaleDateString("en-Us-u-ca-persian"));

// console.log("wait...");
// function timeUp(){

// }
// const timeout = setTimeout(() => {
//   console.log("your time is up");
// }, 5000);
// clearTimeout(timeout);

// setInterval(() => {
//   console.log("gg");
// });
