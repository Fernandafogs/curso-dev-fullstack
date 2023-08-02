/*

ASYNC /AWAIT - transformar uma função assíncroma em síncroma

*/
function transformarEmJson(response){
  return response.json()
}//function para retornar os dados em json

function exibirErro(){
  console.log ('Ops, deu erro!')
}//function de erro

const botaoCarregar = aoClicarNoBotao

async function aoClicarNoBotao(){
  const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)
    .catch(exibirErro) 
}
// quando colocamos ASYNC antes da função, informamos que ela é assincroma
// e antes de uma função promise precisamos colocar o AWAIT
// dessa forma o programa é pausado e aguarda até a função ser executada, a tornando síncroma.
// nestes casos asyns sempre vem antes da função e o await antes de uma função promise

console.log(dados)