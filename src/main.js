const btnStart = document.querySelector(".btn-start");
const btnNewWord = document.querySelector(".btn-newWord");
const gamePage = (document.querySelector(".game-page").style.display = "none");
const newWord = (document.querySelector(".newWord-page").style.display =
  "none");
const btnNewGame = document.querySelector(".btn-newGame");
const btnDesist = document.querySelector(".btn-desist");
const openModal = document.querySelector(".modal__win");
const openModalEnd = document.querySelector(".modal__gameOver");
const closeModal = document.querySelector(".modal__close");
const closeModalEnd = document.querySelector(".modal__close--end");

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
  "GOOGLE",
  "NETFLIX",
  "DISNEY",
  "YOUTUBE",
  "FACEBOOK",
];

function hide() {
  return gamePage;
}

btnStart.onclick = startGame;
btnNewWord.onclick = addnewWord;
btnNewGame.onclick = newGame;
btnDesist.onclick = desist;

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
}

function addnewWord() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".newWord-page").style.display = "block";
}

function newGame() {
  startGame();
  gameHorca.state = 8;
  gameHorca.guessed = [];
  gameHorca.wrong = [];
  draw(gameHorca);
}

function desist() {
  document.querySelector(".home-page").style.display = "block";
  document.querySelector(".game-page").style.display = "none";
}
