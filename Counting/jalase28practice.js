const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const timeup = document.getElementById("timeup");

let d = 2;
let h = 0;
let m = 0;
let s = 1;
let justone = true;
let countdown;

function contidoni() {
  if (justone) {
    countdown = setInterval(() => {
      s--;
      if (s < 0) {
        m--;
        s = 59;
      }
      if (m < 0) {
        h--;
        m = 59;
      }
      if (h < 0) {
        d--;
        h = 23;
      }
      days.innerHTML = d;
      hours.innerHTML = h;
      minutes.innerHTML = m;
      seconds.innerHTML = s;
      if (d === 0 && h === 0 && m === 0 && s === 0) {
        cler();
        timeup.innerHTML = "TIME'S UP!";
      }
    }, 1000);
    justone = false;
  }
}

function cler() {
  clearInterval(countdown);
  countdown = null;
  justone = true;
}

function resss() {
  clearInterval(countdown);
  countdown = null;
  justone = true;
  d = 2;
  h = 0;
  m = 0;
  s = 1;
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

start.addEventListener("click", contidoni);
pause.addEventListener("click", cler);
reset.addEventListener("click", resss);
