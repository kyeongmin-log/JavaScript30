const times = document.querySelector(".timer__controls");
const custom = times.querySelector("#custom");
const displays = document.querySelector(".display");
let currentTimer;

// 정해진 초, 분 값으로 타이머 설정
function selectTimer(event) {
  if (event.target.tagName === "BUTTON") {
    const time = event.target.dataset.time;

    startTimer(time, true);
  }
}

// 입력한 분 값으로 타이머 설정
function customTimer(event) {
  const time = Number(custom.querySelector("input").value) * 60;

  event.preventDefault();
  startTimer(time, true);
  custom.querySelector("input").value = "";
}

// 타이머 표시
function displayTimer(time, isTimer) {
  const timeLeft = displays.querySelector(".display__time-left");
  let [minute, second] = [Math.floor(time / 60), time % 60];

  if (minute < 0) {
    isTimer = false;
    clearInterval(currentTimer);
  }
  if (isTimer) {
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;
    timeLeft.textContent = `${minute}:${second}`;
    document.title = `${minute}:${second}`;
  }
}

// 타이머 완료 시간 표시
function backTime(time) {
  const endTime = displays.querySelector(".display__end-time");
  const date = new Date();
  let [backHour, backMinute] = [(date.getHours() + Math.floor(time / 3600)) % 12, (date.getMinutes() + Math.floor(time / 60)) % 60];

  backMinute = backMinute < 10 ? `0${backMinute}` : backMinute;
  endTime.textContent = `Be Back At ${backHour}:${backMinute}`;
}

// 타이머 동작
function startTimer(time, isTimer) {
  clearInterval(currentTimer);
  displayTimer(time, isTimer);
  backTime(time);
  currentTimer = setInterval(() => {
    time--;
    displayTimer(time, isTimer);
  }, 1000);
}

times.addEventListener("click", selectTimer);
custom.addEventListener("submit", customTimer);
