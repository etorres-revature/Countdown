//global variabels for DOM elements
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const countdownEl = document.querySelector("#countdown");

const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
console.log(newYearTime);


function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  // console.log(diff);

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  console.log(d);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  console.log(h);
  const m = Math.floor(diff / 1000 / 60) % 60;
  console.log(m);
  const s = Math.floor(diff / 1000) % 60;
  console.log(s);

  daysEl.innerHTML = d;
  hoursEl.innerHTML = h < 10 ? "0" + h : h;
  minutesEl.innerHTML = m < 10 ? "0" + m : m;
  secondsEl.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown(), 1000);
