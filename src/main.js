var num = 0
var result = document.getElementById('result')

window.certo = function(botao) {
  num ++
  botao.style.borderColor = 'rgba(33, 108, 33, 1)';
}
window.errado = function(botao) {
  console.log('Errou!'); 
  botao.style.borderColor = 'rgba(108, 33, 33, 1)';
  
}
window.resultado = function () {
  let mensagem = '';

  switch (true) {
    case num === 0:
      mensagem = 'Estude mais e tente novamente.';
      break;
    case num <= 4:
      mensagem = 'Você consegue ir melhor, continue estudando.';
      break;
    case num === 5:
      mensagem = 'Você acertou metade do quiz, mas pode melhorar.';
      break;
    case num <= 7:
      mensagem = 'Bom trabalho! Você está quase lá.';
      break;
    case num <= 9:
      mensagem = 'Parabéns! Você foi muito bem!';
      break;
    default:
      mensagem = 'Incrível! Você acertou todas as perguntas! Já sabe bastante sobre JavaScript!';
  }

  result.innerHTML = `
    Você acertou ${num}/10 perguntas.<br>
    ${mensagem}
  `;
};
