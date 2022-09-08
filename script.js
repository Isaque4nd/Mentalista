var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "O número que você chutou foi: " + chute + ", " + "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "O número que você chutou foi: " +
      chute +
      ", " +
      "Você deve digitar um número entre 0 e 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "O número que você chutou foi: " +
      chute +
      ", " +
      "Você errou!" +
      " O número secreto é menor que o número digitado";
  } else {
    elementoResultado.innerHTML =
      "O número que você chutou foi: " +
      chute +
      ", " +
      "Você errou!" +
      " O número secreto é maior que o número digitado";
  }
}
