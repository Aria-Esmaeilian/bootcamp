var uul = document.getElementById("father");
var asa = uul.children;
for (var i = 0; i < asa.length; i++) {
  if (i % 2 === 0) {
    asa[i].setAttribute("class", "red");
  } else {
    asa[i].setAttribute("class", "green");
  }
}
function handelClike(e) {
  console.log(e);
}
var color = ["red", "blue", "green", "orange", "pink"];
var count = 0;
function handelcolor() {}
