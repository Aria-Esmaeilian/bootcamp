// اگر جمع اعداد یکسان را بخواهیم

var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var sum7 = 0;
var sum8 = 0;
var sum9 = 0;
var number = [2, 4, 9, 4, 8, 4, 1, 5, 8, 4, 1, 4, 7, 2, 7, 8, 5, 5, 1, 1];
for (i = 0; i < number.length; i++) {
  if (number[i] === 1) {
    sum1 += number[i];
  } else if (number[i] === 2) {
    sum2 += number[i];
  } else if (number[i] === 3) {
    sum3 += number[i];
  } else if (number[i] === 4) {
    sum4 += number[i];
  } else if (number[i] === 5) {
    sum5 += number[i];
  } else if (number[i] === 6) {
    sum6 += number[i];
  } else if (number[i] === 7) {
    sum7 += number[i];
  } else if (number[i] === 8) {
    sum8 += number[i];
  } else if (number[i] === 9) {
    sum9 += number[i];
  }
}
console.log("1:", sum1);
console.log("2:", sum2);
console.log("3:", sum3);
console.log("4:", sum4);
console.log("5:", sum5);
console.log("6:", sum6);
console.log("7:", sum7);
console.log("8:", sum8);
console.log("9:", sum9);

// اگر تعداد اعداد یکسان را بخواهیم

var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var sum7 = 0;
var sum8 = 0;
var sum9 = 0;
var number = [2, 4, 9, 4, 8, 4, 1, 5, 8, 4, 1, 4, 7, 2, 7, 8, 5, 5, 1, 1];
for (i = 0; i < number.length; i++) {
  if (number[i] === 1) {
    sum1++;
  } else if (number[i] === 2) {
    sum2++;
  } else if (number[i] === 3) {
    sum3++;
  } else if (number[i] === 4) {
    sum4++;
  } else if (number[i] === 5) {
    sum5++;
  } else if (number[i] === 6) {
    sum6++;
  } else if (number[i] === 7) {
    sum7++;
  } else if (number[i] === 8) {
    sum8++;
  } else if (number[i] === 9) {
    sum9++;
  }
}
console.log("1:", sum1);
console.log("2:", sum2);
console.log("3:", sum3);
console.log("4:", sum4);
console.log("5:", sum5);
console.log("6:", sum6);
console.log("7:", sum7);
console.log("8:", sum8);
console.log("9:", sum9);

var minOdd = Infinity;
var maxEven = -Infinity;
var addeven = [
  23, 7, 15, 42, 8, 19, 31, 4, 27, 16, 9, 38, 12, 25, 6, 18, 33, 11, 29, 14,
];
for (i = 0; i < addeven.length; i++) {
  if (addeven[i] % 2 !== 0 && addeven[i] < minOdd) {
    minOdd = addeven[i];
  } else if (addeven[i] % 2 === 0 && addeven[i] > maxEven) {
    maxEven = addeven[i];
  }
}
console.log(minOdd);
console.log(maxEven);
