const span = document.querySelector("span");
const hours__hour = document.querySelectorAll(".hours__hour");
const minutes__minute = document.querySelectorAll(".minutes__minute");
const seconds__second = document.querySelectorAll(".seconds__second");
const seconds__floatingPlatform = document.querySelector(".seconds__floatingPlatform");
const floatingPlatform__squere = document.querySelector(".floatingPlatform__squere");
const floatingPlatform__squere2 = document.querySelector(".floatingPlatform__squere2");

function floatingSquerePosition(x) {
  floatingPlatform__squere.style.width = `${seconds__second[0].offsetWidth}px`;
  let moveTo = x * (seconds__second[0].offsetWidth + 0.1) + x * 4;
  floatingPlatform__squere.style.left = `calc(${moveTo}px)`;

  floatingPlatform__squere2.style.width = `${seconds__second[0].offsetWidth}px`;
  // let moveTo = x * (seconds__second[0].offsetWidth + 0.1) + x * 4;
  moveTo += 23;
  floatingPlatform__squere2.style.left = `calc(${moveTo}px)`;
}

window.addEventListener("resize", () => {
  console.log(seconds__second[0].offsetWidth);
});
window.addEventListener("load", () => {
  console.log(seconds__second[0].offsetWidth);
});

function returnActualHour() {
  const currentTime = new Date(),
    hourValue = currentTime.getHours(),
    minutesValue = currentTime.getMinutes(),
    secondValue = currentTime.getSeconds();
  return [hourValue, minutesValue, secondValue];
}

const max12Hours = (int) => {
  return int >= 12 ? int - 12 : int;
};

function findColumn(x) {
  while (x >= 12) {
    x -= 12;
  }
  return x;
}

let test = 11;

function displayCurrentTime() {
  hours__hour.forEach((el) => {
    el.classList.remove("active");
  });
  hours__hour[max12Hours(returnActualHour()[0] - 1)].classList.add("active");

  minutes__minute.forEach((el) => {
    el.classList.remove("active");
  });
  minutes__minute[returnActualHour()[1] - 1].classList.add("active");

  seconds__second.forEach((el) => {
    el.classList.remove("activee");
  });
  seconds__second[returnActualHour()[2] - 1].classList.add("activee");
}

function floatingSquereHeight(x) {
  if (x < 12) seconds__floatingPlatform.style.top = "20px";
  else if (x > 11 && x < 24) seconds__floatingPlatform.style.top = "50.5px";
  if (x > 23 && x < 36) seconds__floatingPlatform.style.top = "81px";
  if (x > 35 && x < 48) seconds__floatingPlatform.style.top = "112px";
  if (x > 47) seconds__floatingPlatform.style.top = "143px";
}

const updateTime = setInterval(() => {
  // span.innerHTML = `${returnActualHour()[0]} ${returnActualHour()[1]} ${returnActualHour()[2]}`;
  displayCurrentTime();
  floatingSquereHeight(returnActualHour()[2]);
  floatingSquerePosition(findColumn(returnActualHour()[2]));
}, 1000);
