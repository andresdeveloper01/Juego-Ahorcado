const btnStart = document.querySelector(".btn-start");
const btnNewWord = document.querySelector(".btn-newWord");
const gamePage = (document.querySelector(".game-page").style.display = "none");
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

function hide() {
  return gamePage;
}

btnStart.onclick = startGame;
btnNewWord.onclick = addnewWord;

//generar palabra aleatoria y cambiar a la seccion de juego
function randomWord() {
  const random = Math.floor(Math.random() * words.length);
  const rWord = words[random].toUpperCase();
  gameHorca.secretWord = rWord;
  draw(gameHorca);
}

function startGame() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".game-page").style.display = "block";
  randomWord();

  console.log(gameHorca.secretWord);
}

function addnewWord() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".newWord-page").style.display = "block";
}
