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

// function test() {
//   return "hello world";
// }
// console.log(test());

// function square(num) {
//   return num ** 2;
// }
// console.log(square(6));

// function max(a, b) {
//   if (a >= b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(max(43, 12));

// function star(cunt) {
//   var i = 1;
//   while (i <= cunt) {
//     console.log("*");
//     i++;
//   }
// }
// star(3);

// function check(count) {
//   if (count % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(check(46));

// function pattern(num) {
//   var i = 1;
//   var j;
//   while (i <= num) {
//     var j = 1;
//     while (j <= i) {
//       document.write("*");
//       j++;
//     }
//     i++;
//     document.write("<br>");
//   }
// }
// pattern(5);

// function numberPattern(count) {
//   var i = 0;
//   var j;
//   while (i < count) {
//     j = 1;
//     while (j <= count - i) {
//       document.write(j + "");
//       j++;
//     }
//     i++;
//     document.write("<br>");
//   }
// }
// numberPattern(5);

// var students = [
//   {
//     name: "aria",
//     course: ["HTML", "CSS", "java", "c++"],
//   },
//   {
//     name: "ali",
//     course: ["HTML", "react", "c++"],
//   },
//   {
//     name: "sara",
//     course: ["Js", "HTML", "java"],
//   },
//   {
//     name: "babak",
//     course: ["CSS", "react", "java"],
//   },
//   {
//     name: "nafas",
//     course: ["Js", "CSS", "c++"],
//   },
// ];

// function number(jj) {
//   for (var i = 0; i < students.length; i++) {
//     if (students[i].name === jj) {
//       return students[i].course.length;
//     }
//   }
//   return "Student not found";
// }
// console.log(number("aria"));

// function kgb(jj) {
//   var count = 0;
//   for (var i = 0; i < students.length; i++) {
//     for (var j = 0; j < students[i].course.length; j++)
//       if (students[i].course[j] === jj) {
//         count++;
//         break;
//       }
//   }
//   return count;
// }
// console.log(kgb("Js"));

// function studentsInCourse(num) {
//   var ds = [];
//   for (var i = 0; i < students.length; i++) {
//     for (var j = 0; j < students[i].course.length; j++) {
//       if (students[i].course[j] === num) {
//         ds.push(students[i].name);
//         break;
//       }
//     }
//   }
//   return ds;
// }
// console.log(studentsInCourse("HTML"));

// function sameCourses(a, b) {
//   var df = [];
//   var st1 = [];
//   var st2 = [];
//   for (var i = 0; i < students.length; i++) {
//     if (students[i].name === a) {
//       st1 = students[i].course;
//     } else if (students[i].name === b) {
//       st2 = students[i].course;
//     }
//   }
//   if (st1.length === 0 || st2.length === 0) {
//     return "Student not found";
//   }
//   for (var j = 0; j < st1.length; j++) {
//     for (var k = 0; k < st2.length; k++) {
//       if (st1[j] === st2[k]) {
//         df.push(st1[j]);
//         break;
//       }
//     }
//   }

//   return df;
// }
// console.log(sameCourses("aria", "babak"));

function allCourses() {
  var ff = [];
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students[i].course.length; j++) {
      var ht = false;
      for (var g = 0; g < ff.length; g++) {
        if (students[i].course[j] === ff[g]) {
          ht = true;
          break;
        }
      }
      if (ht === false) {
        ff.push(students[i].course[j]);
      }
    }
  }
  return ff;
}
console.log(allCourses());

var students = [
  {
    name: "aria",
    course: ["HTML", "CSS", "java", "c++"],
  },
  {
    name: "ali",
    course: ["HTML", "react", "c++"],
  },
  {
    name: "sara",
    course: ["Js", "HTML", "java"],
  },
  {
    name: "babak",
    course: ["CSS", "react", "java"],
  },
  {
    name: "nafas",
    course: ["Js", "CSS", "c++"],
  },
];
