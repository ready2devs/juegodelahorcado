var text = document.querySelector(".texto");

var buttonSalvar = document.querySelector("#button-salvar");

var Regex = /^[aA-zZ\s]+$/;

buttonSalvar.addEventListener("click", function () {
  var value = text.value;

  if (Regex.test(value) == true) {
    var newWord = value.toUpperCase();

    sessionStorage.setItem("addedWord", newWord);
    window.location.href = "game.html";
  } else {
    alert();
  }
});

function alert() {
  var value = text.value;

  var alertError = document.querySelector("#mensagem-erro");

  alertError.textContent = "Texto Inválido! Solo letras sin acento";

  if (value == "") {
    alertError.textContent = "Digite una palabra";
  }

  text.addEventListener("input", function () {
    alertError.innerHTML = "";
  });
}
