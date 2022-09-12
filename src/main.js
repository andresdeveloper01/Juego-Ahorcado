const btnStart = document.querySelector(".btn-start");
const btnNewWord = document.querySelector(".btn-newWord");
const game = (document.querySelector(".game-page").style.display = "none");

let words = ["Pelota", "Ahorcado", "Celular", "Frontend"];

function hide() {
  return game;
}

btnStart.onclick = randomWord;

//generar palabra aleatoria y cambiar a la seccion de juego
function randomWord() {
  const random = Math.floor(Math.random() * words.length);
  const rWord = words[random].toUpperCase();
  startGame();
  return rWord;
}

function startGame() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".game-page").style.display = "block";
}
