//global variabels for DOM elements
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const countdownEl = document.querySelector("#countdown");
const yearEl = document.querySelector("#year");
const loadingEl = document.querySelector("#loading");

const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
console.log(newYearTime);

//set background year
yearEl.innerText = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  // console.log(diff);
  //get values for day, hour, minute, seoncd
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  console.log(d);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  console.log(h);
  const m = Math.floor(diff / 1000 / 60) % 60;
  console.log(m);
  const s = Math.floor(diff / 1000) % 60;
  console.log(s);

  //show values for day, hour, minute, second in DOM
  daysEl.innerHTML = d;
  hoursEl.innerHTML = h < 10 ? "0" + h : h;
  minutesEl.innerHTML = m < 10 ? "0" + m : m;
  secondsEl.innerHTML = s < 10 ? "0" + s : s;
}

//show spinner before countdown
setTimeout(() => {
  loadingEl.remove();
  countdownEl.style.display = "flex"
}, 1500);

//run every second to get countdown
setInterval(updateCountdown(), 1000);
