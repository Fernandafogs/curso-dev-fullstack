const formulario = document.querySelector('#formulario')
const botaoCalcular = document.querySelector('#botaoCalcular')
const valor = document.querySelector('#valor')
const result = document.querySelector('#result')

function exibirValor (valorConvertido){
  result.textContent = valorConvertido
}

function exibirErro(){
  alert ('Digite o numero corretamente');
}

botaoCalcular.onclick = ()=>{
  converterValor()
  .then(exibirValor)
  .catch (exibirErro)
}

function converterValor() {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          const valorConvertido = response.conversion_rate * parseFloat(valor.value);
          resolve(valorConvertido);
        } else {
          reject();
        }
      }
    };

    // Substitua a URL abaixo pelo endereço correto da API de conversão de moedas
    xhttp.open('GET', 'https://api.exchangerate-api.com/v4/latest/USD', true);
    xhttp.send();
  });
}
