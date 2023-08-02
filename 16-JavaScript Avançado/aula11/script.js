/*

CALLBACKS

*/

function exibirNaTela (dados){
  console.log ('exibir na tela', dados)
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela) //a arrow function previne que o carregar fotos seja executado até que eu autorize, no caso o callback Exibir na Tela

//Após o click, vai chamar o carregar fotos que vai chamar o callback para exibir na tela

function carregarFotos(callback){
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      if (callback){
        callback(response)
      }//para prevenir caso realmente seja chamado o callback
      }
    }

  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
  xhttp.send();
}
