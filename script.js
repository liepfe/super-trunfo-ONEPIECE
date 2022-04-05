var carta1 = {
  nome: "luffy",
  imagem:
    "https://img.quizur.com/f/img614f52299f5e56.42686942.jpg?lastEdited=1632588333",
  atributos: {
    força: 10,
    agilidade: 7,
    inteligencia: 3,
    haki: 9,
    vontade: 10
  }
};

var carta2 = {
  nome: "sanji",
  imagem:
    "https://vrcmods-file-cdn.s3.us-west-1.amazonaws.com/uploads/items/item/2798/imgs/a4f40642128c4a48a2aa86af29e1591b.jpg",
  atributos: {
    força: 8,
    agilidade: 9,
    inteligencia: 7,
    haki: 6,
    vontade: 7
  }
};

var carta4 = {
  nome: "zoro",
  imagem:
    "http://pm1.narvii.com/6438/50c785dbc6a4dc3421ab4a44eced0771911e16e7_00.jpg",
  atributos: {
    força: 9,
    agilidade: 8,
    inteligencia: 4,
    haki: 8,
    vontade: 8
  }
};

var cartas = [carta1, carta2, carta4];
var cartaMaquina;
var cartaPlayer;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaPlayer = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaPlayer) {
    numeroCartaPlayer = parseInt(Math.random() * 3);
  }
  cartaPlayer = cartas[numeroCartaPlayer];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obterAtributoEscolhido() {
  var radiosAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radiosAtributos.length; i++) {
    if (radiosAtributos[i].checked == true) {
      return radiosAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoEscolhido();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaPlayer.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Você venceu !</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Você perdeu :( </p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou </p>";
  }
  elementoResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaPlayer.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaPlayer.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaPlayer.atributos[atributo];
  }
  var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}