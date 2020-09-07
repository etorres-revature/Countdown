//global variabels for DOM elements
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const countdownEl = document.querySelector("#countdown");

const currentYear = new Date().getFullYear();

const newYeartime = new Date(`January 01 ${currentYear + 1}00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYeartime - currentTime;

  // console.log(diff);

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  console.log(d);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  console.log(h);
  const m = Math.floor(diff / 1000 / 60) % 60;
  console.log(minutesEl);
  const s = Math.floor(diff / 1000) % 60;
  console.log(s);
}

updateCountdown();
