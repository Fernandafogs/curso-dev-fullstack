/*

DESTRUCTURING ASSIGMENT (desestruturação de atribuição - uma forma mais fácil de desestruturar o objeto)

*/

const obj = {
  nome: 'fulano',
  idade: 35,
}
/*esta é uma forma mais fácil de acessar as informações de uma variavel. Por exemplo, ao invés de criar uma const para cada item como const nome = obj.nome e assim por diante. Da forma abaixo é uma maneira mais fácil.

const {
  nome: nomeDoUsuario,
  idade,
} = obj
console.log (nomeDoUsuario)

Foi criada uma const no qual o {} seria o objeto e dentro dela estaria todas as propriedades, que é igual ao a const obj. Para acessar as propriedades, basta chamar o nome das propriedades que estão dentro do objeto.
E caso queira mudar o nome é apenar mencionar como foi no exemplo do nome:nomeDoUsuario.
E a partir daí o nome da propriedade será o último mencionado.
*/

function transformarEmJson(response){
  return response.json()
}//function para retornar os dados em json

function exibirErro(){
  console.log ('Ops, deu erro!')
}//function de erro

const botaoCarregar = aoClicarNoBotao

async function aoClicarNoBotao(){
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(transformarEmJson)
    .catch(exibirErro) 
}
/*Assim como explicado anteiormente, ao invés de puxar propriedade uma a uma dentro do arquivo. ex
const nome = dados.name
const email = dados.email
const phone = dados.phone
Será feito de uma maneira mais direta e menos verbosa.Conforme abaixo.
*/
const {name, email, phone} = dados

console.log(name, email, phone)