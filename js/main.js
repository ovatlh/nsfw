const q = document.getElementsByClassName("q");
const q18 = document.getElementById("q18");
const btns = document.querySelector(".btns");
const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const audio = document.getElementById("audio");

const c = document.getElementsByClassName("c");
const SPEED = 3500;
const MAXGIFS = 100;
var gifsCount = 1;

audio.onloadeddata = function () {
  q18.innerHTML = "Are you over 18?";
  btns.style.display = "grid";
};

btnYes.addEventListener("click", () => {
  q18.innerHTML = "Let's go 😎👌";
  btns.remove();
  start();
});

btnNo.addEventListener("click", () => {
  q18.innerHTML = "🤔";
  btns.remove();
  setTimeout(() => {
    location.reload();
  }, 1000);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start() {
  audio.play();
  q[0].classList.add("ease-out");
  document.title = "NSFW +18 :D";
  setTimeout(() => {
    q[0].remove();
  }, 6000);
  setTimeout(() => {
    addRandomIMG();
  }, 1000);
  loopControl();
  document.body.classList.add("rainbow");
}

function addRandomIMG() {
  var img = document.createElement("img");
  var maxHeight = (screen.height - ((screen.height / 100) * 30));

  img.src = `files/gifs/${getRandomInt(1, 61)}.gif`;
  var res = getRandomInt(1, 2);
  if(res === 1){
    img.classList.add("left-right");
  }
  else {
    img.classList.add("right-left");
  }
  var resY = getRandomInt(1, maxHeight);
  var resStyle = `top: ${resY}px`;
  img.setAttribute("style", resStyle);
  c[0].appendChild(img);
}

function loopControl() {
  setTimeout(() => {
    addRandomIMG();
    if (gifsCount < MAXGIFS) {
      loopControl();
      gifsCount++;
    }
  }, SPEED);
}
