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
function reternCourse(num) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].name === num) {
      return students[i].course;
    }
  }
  return "Student not found";
}
console.log(reternCourse("aria"));

////////////////////////////////////////

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    document.write(i + " * " + j + " = " + i * j);
    document.write("<br>");
  }
  document.write("<br>");
}

//or

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
    //or
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

////////////////////////////////////////

function age(jj) {
  return 2026 - jj;
}
console.log(age(24));
