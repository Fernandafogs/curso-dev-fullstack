/*

PROMISES - vou executar uma função e ela vai me prometer voltar para executar a função. Promissificar essa função.

*/

function exibirNaTela (dados){
  console.log ('exibir na tela', dados)
}

function exibirErro(){
  console.log ('Ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
  carregarFotos()
    .then(exibirNaTela)//tudo ok, mensagem será exibida na tela
    .catch(exibirErro) // caso contrário, mensagem de erro

function carregarFotos(){
  return new Promise ((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText);

        resolve (response)
      }

      if(this.status === 404) {
        reject()
      }
    }// dentro desta função é trabalhado o Promisse. Após o clique , Promisse é chamada dentro desta função. Caso esteja ok será executado o then (exibir na Tela), caso contrário o catch com mensagem de erro.

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
    xhttp.send();



  })
  
}
