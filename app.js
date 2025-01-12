const tx = document.querySelector(".key__main");
const kb = document.querySelector(".key__info");
const knum = document.querySelector(".key__num");
const kd = document.querySelector(".enter__key__entertitle");
const button = document.querySelector(".btn");

document.addEventListener("keydown", (e) => {
  tx.classList.add("information");
  kd.textContent = e.key;
  kb.classList.remove("information");
  button.classList.remove("information");
  console.log(e);
});
button.addEventListener("click", () => {
  tx.classList.remove("information");
  kb.classList.add("information");
  button.classList.add("information");
  console.log("info");
});

const play = document.getElementById("play");
const music = document.getElementById("audio");
