const btnStart = document.querySelector(".btn-start");
const btnNewWord = document.querySelector(".btn-newWord");
const game = (document.querySelector(".game-page").style.display = "none");
const newWord = (document.querySelector(".newWord-page").style.display =
  "none");

let words = [
  "Pelota",
  "Ahorcado",
  "Celular",
  "Frontend",
  "ALURA",
  "LATAM",
  "ECUADOR",
  "CHILE",
  "ORACLE",
  "JAVASCRIPT",
  "REACT",
  "GITHUB",
  "GIT",
];
let secretWord = "";

function hide() {
  return game;
}

btnStart.onclick = startGame;
btnNewWord.onclick = addnewWord;

//generar palabra aleatoria y cambiar a la seccion de juego
function randomWord() {
  const random = Math.floor(Math.random() * words.length);
  const rWord = words[random].toUpperCase();
  secretWord = rWord;
  drawHanged();
  drawLine();
}

function startGame() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".game-page").style.display = "block";
  randomWord();
}

function addnewWord() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".newWord-page").style.display = "block";
}
