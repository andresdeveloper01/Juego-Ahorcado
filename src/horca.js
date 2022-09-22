
const guion = document.querySelector(".guion")
function drawLine() {
 
  const width = 600 / secretWord.length;
  for (let i = 0; i < secretWord.length; i++) {
    guion + width * i
  }
console.log(drawLine)
  
}
