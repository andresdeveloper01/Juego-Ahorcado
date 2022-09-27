let gameHorca = {
  state: 9,
  guessed: [],
  wrong: [],
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
  $elem.src = "./images/ahorcado0" + gameHorca.state + ".png";
  // Crear letras adivinadas
  $elem = $html.guessed;
  for (let i = 0; i < secretWord.length; i++) {
    let $span = document.createElement("span");
    let $text = document.createTextNode("");
    if (gameHorca.guessed.indexOf(secretWord[i]) >= 0) {
      $text.nodeValue = secretWord[i];
      console.log(secretWord[i]);
    }
    $span.setAttribute("class", "word guessed");
    $span.appendChild($text);
    $elem.appendChild($span);
  }
  // Crear letras equivocadas
  let wrong = gameHorca.wrong;
  $elem = $html.wrong;
  for (let i = 0; i < wrong.length; i++) {
    $span = document.createElement("span");
    $text = document.createTextNode(wrong[i]);
    $span.setAttribute("class", "word wrong");
    $span.appendChild($text);
    $elem.appendChild($span);
  }
}

function checkLetter(key) {
  if (
    (key >= 65 && letters.indexOf(key)) ||
    (key <= 90 && letters.indexOf(key))
  ) {
    letters.push(key);
    return false;
  } else {
    console.log(key);
    return true;
  }
}
