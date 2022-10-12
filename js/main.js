var input = document.querySelector(".input");

var mainJogo = document.querySelector(".main-jogo");

var listWords = [
  "AMARILLO",
  "AMIGO",
  "AVION",
  "BOLA",
  "CAMA",
  "CANICA",
  "CELULAR",
  "JAVA",
  "LIBRO",
  "DESAFIO",
  "GATO",
  "CSS",
  "MERMELADA",
  "BASQUET",
  "LLUVIA",
  "IMPACTO",
  "ENMENDAR",
];

getNewWord();

var chosenWord = listWords[Math.floor(Math.random() * listWords.length)];

var secretWord = chosenWord;

var wordLength = chosenWord.length;

console.log(chosenWord);

function getNewWord() {
  var newWordAdded = sessionStorage.getItem("addedWord");

  if (newWordAdded != null) {
    listWords.push(newWordAdded);
  }
}

function showDash(tam) {
  for (var i = 0; i < tam; i++) {
    var letras = document.querySelector("#letra" + i);
    letras.style.display = "block";
  }
}

function main() {
  showDash(wordLength);
  drawGallow();
  input.focus();
}

window.addEventListener("load", main);

mainJogo.addEventListener("click", function () {
  input.focus();
});
