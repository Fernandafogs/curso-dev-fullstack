
function entrar() {
  let inputNome = prompt('Digite o seu Nome:')
  
  let inputIdade = prompt('Digite o sua Idade:')
  
  let idade = parseInt(inputIdade)
  
  let maiorOuMenor
  
  if (idade >= 18) {
    maiorOuMenor = 'maior'
  } else if (idade < 18) {
    maiorOuMenor = 'menor'
  } 
  
  let mensagemPersonalizada = ''
  
  
  if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
    mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
  } else if (idade === 'undefined' || inputNome === 'undefined') { alert ('Preencha os campos corretamente');}
  
  let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`
  let mensagemUndefined = alert('Preencha os campos corretamente')

  document.querySelector('#mensagemUndefined').innerHTML = mensagemUndefined
  document.querySelector('#saudacao').innerHTML = saudacao
  document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}

