var chengColor = document.getElementsByTagName("li");
for (var i = 0; i < chengColor.length; i++) {
  if (i % 2 === 0) {
    chengColor[i].setAttribute("class", "red-color");
  } else {
    chengColor[i].setAttribute("class", "green-color");
  }
}

///////////////////////////////////////////////////////////////////////////

var imgReader = document.getElementById("img");
imgReader.setAttribute(
  "src",
  "https://dkstatics-public.digikala.com/digikala-products/ffb8880b297ed480376ff262c1e075520495e9e4_1758361981.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80/format,webp",
);
imgReader.setAttribute("width", "200px");
imgReader.setAttribute("height", "200px");
imgReader.setAttribute("alt", "taier photho");
imgReader.style.border = "5px solid black";
imgReader.style.borderRadius = "10px";

///////////////////////////////////////////////////////////////////////////

var person = {
  img: "https://tse1.mm.bing.net/th/id/OIP.hqBfCl4wMbO3-TxoqCmFYgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  name: "aria",
  lastname: "Esmaeilian",
  age: 24,
  country: "Iran",
};
var cart = document.getElementById("cart");
cart.innerHTML = `
  <img id="img" src ="${person.img}">
  <p id="name">${person.name}</p>
  <p id="lastname">${person.lastname}</p>
  <p id="age">${person.age}</p>
  <p id="country">${person.country}</p>`;
document.getElementById("cart").setAttribute("class", "wrap");
document.getElementById("img").setAttribute("width", "200");
document.getElementById("img").setAttribute("height", "200");
document.getElementById("img").setAttribute("alt", "person photho");
document.getElementById("name").style.color = "red";
document.getElementById("lastname").style.color = "green";
document.getElementById("age").style.color = "blue";
document.getElementById("country").style.textDecoration = "overline";
