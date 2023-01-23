var respostaVazia = document.querySelector('.resposta-vazia')
var respostaPreenchida = document.querySelector('.resposta-preenchida')
const mensagem = document.querySelector('#entradaMensagem');

var botaoCriptografar = document.querySelector('.btn-crip')
var botaoDescriptografar = document.querySelector('.btn-descrip')
 const btnCopiar = document.querySelector('.btn-copiar');
 const btnColar = document.querySelector('.btn-colar');
 var btn = document.querySelector("#refresh");
var entradaMensagem = document.querySelector('#texto')
var textoCodificado = document.querySelector('.texto-codificado')


function mostrarResposta() {

  if (entradaMensagem.value !== '') {
    respostaVazia.style.display = 'none'
    respostaPreenchida.style.display = 'block'
  }
}


function criptografar() {

  var conteudoTextarea = entradaMensagem.value
  var resultadoCriptografado = conteudoTextarea
  .replaceAll("e", "kfj")
  .replaceAll("i", "7inx")
  .replaceAll("a", "3zky")
  .replaceAll("o", "5mzp")
  .replaceAll("u", "9pnm")

  textoCodificado.innerHTML = resultadoCriptografado;

  mostrarResposta()
}

function tudoMinusculo(string) {

  let resultado = string.value.toLowerCase();
  string.value = resultado;
}

function descriptografar() {

  var conteudoTextarea = entradaMensagem.value
  var resultadoDescriptografado = conteudoTextarea
  .replaceAll("kfj", "e")
  .replaceAll("7inx", "i")
  .replaceAll("3zky", "a")
  .replaceAll("5mzp", "o")
  .replaceAll("9pnm", "u")

  textoCodificado.innerHTML = resultadoDescriptografado

  mostrarResposta()
}


btnCopiar.addEventListener('click', function(event) {   textoCodificado.select();
            alert('Texto copiado com sucesso!');
        });
        
btnColar.addEventListener('click', async (e) => {
  const resposta = await navigator.clipboard.readText();
            entradaMensagem.value = resposta;
        });

botaoCriptografar.onclick = criptografar
botaoDescriptografar.onclick = descriptografar
botaoCopiar.onclick = copiaTexto
