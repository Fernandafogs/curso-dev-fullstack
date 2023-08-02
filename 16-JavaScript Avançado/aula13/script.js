/*

FETCH - já é uma promise

*/
function transformarEmJson(response){
  return response.json()
}//function para retornar os dados em json

function exibirNaTela (dados){
  console.log (dados)
}//function exibir os dados na tela

function exibirErro(){
  console.log ('Ops, deu erro!')
}//function de erro

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs {
  method: {POST},
  headers: {},
}

botaoCarregar.onclick = () => 
  fetch('https://jsonplaceholder.typicode.com/photos', configs)
  //o fetch tem dois paramentros, um é a url o outro é objeto que pode ser GET, POST...se não for mencionado, será automaticamente o method é GET
    .then(transformarEmJson)
    .then(exibirNaTela)
    .catch(exibirErro) 
    //podem ter vários then, mas apenas um catch
