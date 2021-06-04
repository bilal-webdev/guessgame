const circles = document.getElementById("circles");
const timer = document.getElementById("timer");
var time = 60;
var timer1Interval = setInterval(timer1, 1000);
var guessScore = document.getElementById("guess");
let score = 0;
var setScore = document.getElementById("score");
var reset = document.getElementById("reset");
var timeOut = document.getElementById("timeOut");
var setToScore = document.getElementById("toscore");

function initial() {
  guessScore.innerText = random();
  setScore.innerText = score;
  refresh();
}

function refresh() {
  guessScore.innerText = random();
  for (var i = 0; i < 90; i++) {
    var value = random();
    circles.innerHTML += '<div class="circle">' + value + "</div>";
  }
}

function timer1() {
  if (time < 1) {
    clearInterval(timer1Interval);
    circles.innerHTML = " ";
    timeOut.style.display = "initial";
    setToScore.innerText = score;
  }
  timer.innerHTML = time--;
  time = time--;
}

function random() {
  return Math.floor(Math.random() * 10) + 1;
}

function check(userPressed, actualValue) {
  if (userPressed === actualValue) {
    score += 10;
    setScore.innerText = score;
  }
}

circles.addEventListener("click", (event) => {
  if (event.target.innerText.length < 3) {
    check(event.target.innerText, guessScore.innerText);
    circles.innerHTML = "";
    if (time < 1) {
    } else refresh();
  }
});

function reloadPage() {
  location.reload();
}
initial();
