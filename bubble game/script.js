let timercount = 10;
let hitNum;
let score = 0;
let numData;
function makebubble() {
  let bubble = " ";
  for (let i = 1; i <= 168; i++) {
    let random = Math.floor(Math.random() * 10);
    bubble += ` <div class="bubble">${random}</div>`;
  }
  document.getElementById("bbox").innerHTML = bubble;
}
function timer() {
  let timerInt = setInterval(() => {
    if (timercount > 0) {
      timercount--;
      document.querySelector("#timer").textContent = timercount;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#bbox"
      ).innerHTML = `Game Over  your score is : ${score}`;
    }
  }, 1000);
}
function hitFunction() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitNum;
}
function click() {
  document.querySelector("#bbox").addEventListener("click", function (dets) {
    numData = Number(dets.target.textContent);
    if (hitNum === numData) {
      increaseScore();
      hitFunction();
      makebubble();
    }
  });
}
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
makebubble();
timer();
hitFunction();
click();
