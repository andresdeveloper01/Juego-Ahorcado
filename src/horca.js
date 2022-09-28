let gameHorca = {
  state: 8,
  guessed: [],
  wrong: [],
  secretWord: "ALURA",
};
let letters = [];

let $html = {
  ahorcado: document.getElementById("ahorcado"),
  guessed: document.querySelector(".guessed-words"),
  wrong: document.querySelector(".wrong-words"),
};

function draw(gameHorca) {
  // Actualizar imagen del ahorcado
  let $elem;
  $elem = $html.ahorcado;

  let state = gameHorca.state;
  if (state === 9) {
    state = gameHorca.previus;
  }
  $elem.src = "./images/ahorcado0" + state + ".png";
  // Crear letras adivinadas
  $elem = $html.guessed;
  let guessed = gameHorca.guessed;
  let secretWord = gameHorca.secretWord;
  $elem.innerHTML = "";
  for (let i = 0; i < secretWord.length; i++) {
    let $span = document.createElement("span");
    let $text = document.createTextNode("");
    if (guessed.indexOf(secretWord[i]) >= 0) {
      $text.nodeValue = secretWord[i];
    }
    $span.setAttribute("class", "word guessed");
    $span.appendChild($text);
    $elem.appendChild($span);
  }
  // Crear letras equivocadas
  let wrong = gameHorca.wrong;
  $elem = $html.wrong;
  $elem.innerHTML = "";
  for (let i = 0; i < wrong.length; i++) {
    $span = document.createElement("span");
    $text = document.createTextNode(wrong[i]);
    $span.setAttribute("class", "word wrong");
    $span.appendChild($text);
    $elem.appendChild($span);
  }
}

function guess(gameHorca, letter) {
  let state = gameHorca.state;
  let secretWord = gameHorca.secretWord;
  if (state === 1 || state === 9) {
    return;
  }

  let guessed = gameHorca.guessed;
  let wrong = gameHorca.wrong;
  if (guessed.indexOf(letter) >= 0 || wrong.indexOf(letter) >= 0) {
    return;
  }

  if (secretWord.indexOf(letter) >= 0) {
    let win = true;
    for (let i = 0; i < secretWord.length; i++) {
      if (guessed.indexOf(secretWord[i]) < 0 && secretWord[i] != letter) {
        win = false;
        gameHorca.previus = gameHorca.state;
        break;
      }
    }
    if (win) {
      gameHorca.state = 9;
    }
    guessed.push(letter);
  } else {
    gameHorca.state--;
    wrong.push(letter);
  }
}

console.log(gameHorca);
window.onkeydown = function guessLetter(e) {
  let letter = e.key;
  letter = letter.toUpperCase();
  if (/[^A-ZÑ]/.test(letter)) {
    return;
  }
  guess(gameHorca, letter);
  draw(gameHorca);
  console.log(letter);
};
