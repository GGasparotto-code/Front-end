var numeroSecreto = parseInt(Math.random() * 1001);

function BChute() {
  var chute = document.getElementById("campoChute").value;

  if (chute == numeroSecreto) {
    alert("Parabéns! Você acertou o número!");
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor!');
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior!');
  }
  document.getElementById("campoChute").value = "";
}
