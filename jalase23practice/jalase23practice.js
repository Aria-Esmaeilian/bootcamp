let arr = [1, 2, 3, 4, 5];

function all(array, callback) {
  return callback(array);
}

function Jame(array) {
  let jam = 0;
  for (let i = 0; i < array.length; i++) {
    jam += array[i];
  }
  return jam;
}

function Zarbe(array) {
  let zarb = 1;
  for (let i = 0; i < array.length; i++) {
    zarb *= array[i];
  }
  return zarb;
}

function Tafrighe(array) {
  let tafrigh = array[0];
  for (let i = 1; i < array.length; i++) {
    tafrigh -= array[i];
  }
  return tafrigh;
}

const showJam = all(arr, Jame);
console.log(showJam);

const showZarb = all(arr, Zarbe);
console.log(showZarb);

const showTafrigh = all(arr, Tafrighe);
console.log(showTafrigh);
