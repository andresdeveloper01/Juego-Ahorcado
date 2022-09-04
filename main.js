let words = [];

const btnStart = document.querySelector(".btn-start");
const btnNewWord = document.querySelector(".btn-newWord");
const game = document.querySelector(".container__game");

btnStart.addEventListener("click", (e) => {
  hide();
});

function hide() {
  document.querySelector(".home-page").style.visibility = "hidden";
}
