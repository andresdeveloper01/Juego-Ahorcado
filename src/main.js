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
  draw(gameHorca);
}

function startGame() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".game-page").style.display = "block";
  randomWord();

  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    let guessed = gameHorca.guessed;
    if (checkLetter(letter) && secretWord.indexOf(letter)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
          guessed.push(letter);
          console.log(secretWord);
        }
      }
    }
  };
  console.log(secretWord);
}

function addnewWord() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".newWord-page").style.display = "block";
}
