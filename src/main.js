// Variável que conta o número de acertos
var num = 0
// Variável que pega o elemento do resultado
var result = document.getElementById('result')
// Variável que rastreia os botões dos fieldsets já clicados
var fieldsetRespondidos = new Set();

// Função das respostas certas 
window.certo = function(botao) {
  var fieldset = botao.closest('fieldset');

  if (fieldsetRespondidos.has(fieldset)) {
    return;
  }
  
  num ++
  botao.style.borderColor = 'rgba(33, 108, 33, 1)';
  botao.style.borderWidth = '3px';

  fieldsetRespondidos.add(fieldset);
  desabilitarFieldset(botao);
}

// Função das respostas erradas
window.errado = function(botao) {

  var fieldset = botao.closest('fieldset');

  if (fieldsetRespondidos.has(fieldset)) {
    return;
  }

  botao.style.borderColor = 'rgba(108, 33, 33, 1)';
  botao.style.borderWidth = '3px'; 

  fieldsetRespondidos.add(fieldset);
  desabilitarFieldset(botao); 
}

// Função para desabilitar os botões após a resposta
function desabilitarFieldset(fieldset) {
  var todosBotoes = fieldset.querySelectorAll('input[type="button"]');
  
  todosBotoes.forEach(function(btn) {
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.style.cursor = 'not-allowed';
  });
}

// Função do resultado final do quiz
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

    // caso a pessoa acerte tudo né veyr
    default:
      mensagem = 'Incrível! Você acertou todas as perguntas! Já sabe bastante sobre JavaScript!';
  }

  // exibe o resultado geral (x/10)
  result.innerHTML = `
    Você acertou ${num}/10 perguntas.<br><br>
    ${mensagem}
  `;
};
