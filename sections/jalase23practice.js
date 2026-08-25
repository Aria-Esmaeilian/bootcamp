let arr = [1, 2, 3, 4, 5];

function all(array, callback, bdcd = 0) {
  var resalt = bdcd;
  for (let i = 0; i < array.length; i++) {
    var resalt = callback(resalt, array[i]);
  }
  return resalt;
}

function Jame(a, b) {
  return a + b;
}
function Zarbe(a, b) {
  return a * b;
}
function Tafrighe(a, b) {
  return a - b;
}

const showJam = all(arr, Jame);
console.log(showJam);

const showZarb = all(arr, Zarbe, 1);
console.log(showZarb);

const showTafrigh = all(arr, Tafrighe);
console.log(showTafrigh);
