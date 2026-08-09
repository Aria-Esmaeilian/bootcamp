var mama = document.getElementById("mama");
var papa = document.getElementById("papa");
var num = document.getElementById("number");
var ras = document.getElementById("rasa");
function manes() {
  if (num.innerHTML === "1") {
    num.style.color = "green";
  } else if (num.innerHTML === "0") {
    num.style.color = "green";
  } else {
    num.style.color = "black";
  }
  if (num.innerHTML > "0") {
    num.innerHTML--;
  }
}
function pluse() {
  if (num.innerHTML === "4") {
    num.style.color = "red";
  } else if (num.innerHTML === "5") {
    num.style.color = "red";
  } else {
    num.style.color = "black";
  }
  if (num.innerHTML < "5") {
    num.innerHTML++;
  }
}
function rs() {
  if (num.innerHTML !== "0") {
    num.innerHTML = "0";
    num.style.color = "black";
  } else {
    num.style.color = "black";
  }
}
