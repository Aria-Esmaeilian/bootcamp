// filter - reduce - forEach - indexof - lastindexof - splice - reverse -
//  concat - join - toString

const bankuser = [
  { name: "aria", bd: "13700502", balance: 1000, hasHome: false, city: "isf" },
  { name: "ali", bd: "13700702", balance: 2000, hasHome: true, city: "teh" },
  {
    name: "mohamad",
    bd: "14020501",
    balance: 1200,
    hasHome: false,
    city: "isf",
  },
  { name: "sara", bd: "13800309", balance: 3000, hasHome: true, city: "isf" },
];
// const goli = bankuser.filter((item) => Number(item.bd) > Number("13730101"));
// console.log(goli);

// const pole = bankuser.filter((item) => item.balance > 1100);
// console.log(pole);

// const hashome = bankuser.filter(
//   (item) => item.balance > 1100 && item.hasHome === true,
// );
// console.log(hashome);

const num = [1, 2, 3, 4, 5];
const jame = num.reduce((a, b) => {
  return a + b;
}, 0);
// اول مقدراهه 0 زا میزاه توی a و 1 vh مزیاه جمع میکنه بعد 1 را میزراه توی a بعد 2 را میزاره توری b و تگر 0 را نزاری به صورت پیش فرض اولین ایتم را میرازه

const num2 = [20, 10, 5, 3, 18, 23, 2];
const rr = num2.reduce((a, b) => {
  if (b > a) return b;
  else return a;
});
console.log(rr);
