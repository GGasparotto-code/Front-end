function converterValor() {
    var valorEmEuro = document.getElementById("campoValorEuro").value;
    var cotacaoEuro = 5.23;

    var valorEmReal = valorEmEuro * cotacaoEuro;
    valorEmReal = valorEmReal.toFixed(2);

    alert("R$ " + valorEmReal);
}