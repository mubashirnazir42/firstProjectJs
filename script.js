let guess = document.querySelector(".guess").value;
var btncheck = document.querySelector(".check");
let msg = document.querySelector(".message");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").value = secretNumber;
let score = document.querySelector(".score").textContent;
let high = document.querySelector(".Highscore").textContent;
var btnagain = document.querySelector(".btn-again");

btnagain.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  msg.textContent = "start guessing..";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  // document.querySelector(".Highscore").textContent = 0;
  document.querySelector(".number").textContent = "?";
});

btncheck.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let msg = document.querySelector(".message");
  if (!guess) {
    msg.innerHTML = "no number 🛑";
  } else if (guess === secretNumber) {
    msg.innerHTML = "correct Answer";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > high) {
      high = score;
      document.querySelector(".Highscore").textContent = high - 1;
    }
  } else if (guess > secretNumber) {
    msg.innerHTML = "high number"; // when guess is hight
  } else if (guess < secretNumber) {
    msg.innerHTML = "lowNumber";
  }

  score--;
  document.querySelector(".score").textContent = score;

  if (score < 0) {
    msg.innerHTML = "you lost the match";
    document.querySelector(".score").innerHTML = 0;
    console.log(score);
  }

  // console.log(score);
});
