var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.tentativa}</td>
            <td>${jogador.morte}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarTentativa(${index})">Tentativa</button></td>
            <td><button onClick="adicionarMorte(${index})">Morte</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
  //verificar se player ja existe ou não
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  listaDeJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    tentativa: 0,
    morte: 0,
    pontos: 0
  });
  document.getElementById("campoNomeJogador").value = "";
  exibirNaTela();
}

function adicionarVitoria(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
  exibirNaTela();
}

function adicionarTentativa(index) {
  listaDeJogadores[index].tentativa++;
  exibirNaTela();
}

function adicionarMorte(index) {
  listaDeJogadores[index].morte++;
  exibirNaTela();
}

function limparPontuacaoJogador(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].tentativa = 0;
  listaDeJogadores[index].morte = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}

function removerJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}