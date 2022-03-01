const timer = document.getElementById("clock");

let [hr, min, sec, ms] = [0, 0, 0, 0];
let interval = false;

document.getElementById("start").addEventListener("click", () => {
  if (interval === true) {
    clearInterval(interval);
  }
  interval = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  timer.innerHTML = "00:00:00:000";
  [hr, min, sec, ms] = [0, 0, 0, 0];
});

function displayTimer() {
  ms += 10;
  if (ms === 1000) {
    ms = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60) {
        min = 0;
        hr++;
      }
    }
  }
  let hours = hr < 10 ? "0" + hr : hr;
  let minutes = min < 10 ? "0" + min : min;
  let seconds = sec < 10 ? "0" + sec : sec;
  let milliseconds = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;

  timer.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}
