// var a = 100;
// while (a >= 0) {
//   if (a % 2 == 1) {
//     console.log(a);
//   }
//   a--;
// }

// var a = 1;
// var sum = 0;
// while (a <= 100) {
//   sum += a;
//   a++;
// }
// console.log(sum);

// let numbers = [
//   23, 7, 15, 42, 8, 19, 31, 4, 27, 16, 9, 38, 12, 25, 6, 18, 33, 11, 29, 14,
// ];

// let first = -Infinity;
// let second = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > first) {
//     second = first;
//     first = numbers[i];
//   } else if (numbers[i] > second) {
//     second = numbers[i];
//   }
// }

// console.log("Largest:", first);
// console.log("Second Largest:", second);

/////////////////////////////////////////////////

// var i = 0;
// var j;
// while (i <= 10) {
//   j = 10;
//   while (j >= 1 && j - i) {
//     document.write("*");
//     j--;
//   }
//   document.write("<br>");
//   i++;
// }

// var i = 0;
// var j;
// while (i <= 10) {
//   j = 1;
//   while (j <= i) {
//     document.write("*");
//     j++;
//   }
//   document.write("<br>");
//   i++;
// }

// var i = 0;
// var j;
// while (i <= 10) {
//   var j = 10;
//   while (j >= 1 && j - i) {
//     document.write(j);
//     j--;
//   }
//   document.write("<br>");
//   i++;
// }

// var i = 0;
// var j;
// while (i < 10) {
//   var j = 1;
//   while (j <= i) {
//     document.write(j);
//     j++;
//   }
//   document.write("<br>");
//   i++;
// }

// var i = 1;
// var j;
// while (i <= 10) {
//   var j = 11;
//   while (j - i) {
//     document.write(i);
//     j--;
//   }
//   document.write("<br>");
//   i++;
// }

// var i = 10;
// var j;
// while (i >= 1) {
//   var j = 1;
//   while (j <= 11 - i) {
//     document.write(i);
//     j++;
//   }
//   document.write("<br>");
//   i--;
// }

// var i = 10;
// var j;
// while (i >= 1) {
//   var j = 65;
//   while (j <= 75 - i) {
//     document.write(String.fromCharCode(j));
//     j++;
//   }
//   document.write("<br>");
//   i--;
// }

/////////////////////////////////////////

// for (var i = 1; i <= 10; i++) {
//   if (i == 6) {
//     continue;
//     console.log(i);
//   } else {
//     console.log(i);
//   }
// }

// for (var i = 1; i <= 10; i++) {
//   if (i == 6) {
//     break;
//     console.log(i);
//   } else {
//     console.log(i);
//   }
// }

// for (var i = 0; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for (var i = 0; i <= 10; i++) {
//   for (var j = 10; j >= 1 && j - i; j--) {
//     j <= i;
//     document.write("*");
//   }
//   document.write("<br>");
// }

//////////////////////////////////////////////////////////

function test() {
  return "hello world";
}
console.log(test());

function square(num) {
  return num ** 2;
}
console.log(square(6));

function max(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(43, 12));

function star(cunt) {
  var i = 1;
  while (i <= cunt) {
    console.log("*");
    i++;
  }
}
star(3);

function check(count) {
  if (count % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(check(46));

function pattern(num) {
  var i = 1;
  var j;
  while (i <= num) {
    var j = 1;
    while (j <= i) {
      document.write("*");
      j++;
    }
    i++;
    document.write("<br>");
  }
}
pattern(5);

function numberPattern(count) {
  var i = 0;
  var j;
  while (i < count) {
    j = 1;
    while (j <= count - i) {
      document.write(j + "");
      j++;
    }
    i++;
    document.write("<br>");
  }
}
numberPattern(5);
