var input = document.getElementById("name");
var ageInput = document.getElementById("age");
var p1 = document.getElementById("p1");

var userJson = localStorage.getItem("user") || "";
var userStorage = JSON.parse(userJson);

input.value = userStorage.name;
ageInput.value = userStorage.age;
p1.innerText = `name: ${userStorage.name}, age: ${userStorage.age}`;

function handleAdd() {
  var user = { name: input.value, age: ageInput.value };
  p1.innerText = `name: ${user.name}, age: ${user.age}`;
  var userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}

function handleRemove() {
  localStorage.removeItem("user");
}
