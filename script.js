let mensagemCriptografada;
let mensagemDescriptografada;
let textoDeEntrada;

function criptografarMensagem() {
  obterTexto();

  if (!textoDeEntrada) {
    ocultarResultado();
    mostrarConsoleInicial();
  } else {
    ocultarConsoleInicial();
    mostrarResultado();

    mensagemCriptografada = "";
    for (const char of textoDeEntrada) {
      switch (char) {
        case "e":
          mensagemCriptografada += "enter";
          break;
        case "i":
          mensagemCriptografada += "imes";
          break;
        case "a":
          mensagemCriptografada += "ai";
          break;
        case "o":
          mensagemCriptografada += "ober";
          break;
        case "u":
          mensagemCriptografada += "ufat";
          break;
        default:
          mensagemCriptografada += char;
      }
    }

    document.getElementById("output").innerHTML =
      '<textarea readonly id ="input-texto">' +
      mensagemCriptografada +
      "</textarea> " +
      '<button class="btn_copiar" id="copiar" onclick="copiarTexto()">Copiar</button>';

    limparTexto();
  }
}

function descriptografarMensagem() {
  obterTexto();

  if (!textoDeEntrada) {
    ocultarResultado();
    mostrarConsoleInicial();
  } else {
    ocultarConsoleInicial();
    mostrarResultado();

    mensagemDescriptografada = textoDeEntrada
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("output").innerHTML =
      '<textarea class="cript_resultado" readonly id ="input-texto" >' +
      mensagemDescriptografada +
      "</textarea> " +
      '<button class="btn_copiar" id="copiar" onclick="copiarTexto()">Copiar</button>';

    limparTexto();
  }
}

function ocultarConsoleInicial() {
  document.getElementById("msgConsoleInicio").style.display = "none";
}

function mostrarConsoleInicial() {
  document.getElementById("msgConsoleInicio").style.display = "block";
}

function ocultarResultado() {
  document.getElementById("output").style.display = "none";
}

function mostrarResultado() {
  document.getElementById("output").style.display = "block";
}

function copiarTexto() {
  let textoCopiado = document.getElementById("input-texto");
  textoCopiado.select();
  document.execCommand("copy");
  alert("Texto copiado");
}

function obterTexto() {
  textoDeEntrada = document.querySelector("textarea").value;
  return textoDeEntrada;
}

function limparTexto() {
  textoDeEntrada = "";
}
