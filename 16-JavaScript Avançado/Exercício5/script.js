// crie uma função que retorne uma promise
// essa função deverá levar 10 segundos para ser resolvida
// ela deve resolver com texto: 'Ok, promise resolvida!'
// você deve exibir esse texto no console


function minhaPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Ok, promise resolvida!');
      resolve('Ok, promise resolvida!');
    }, 10000);
  });
}

minhaPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });


 /* Neste código, a função minhaPromise retorna uma nova Promise. Dentro do construtor da Promise, usamos a função setTimeout para simular um atraso de 10 segundos. Após os 10 segundos, a função de callback é executada, exibindo o texto no console e resolvendo a Promise com o mesmo texto usando resolve('Ok, promise resolvida!').

  Em seguida, chamamos a função minhaPromise e encadeamos o método .then() para tratar o caso de sucesso da Promise. Dentro do .then(), exibimos o resultado no console com console.log(res).
  
  Caso ocorra algum erro durante a execução da Promise, podemos encadear o método .catch() para tratar o erro. Neste exemplo, não estamos tratando erros específicos, apenas exibindo o erro no console com console.error(err).
  
  Dessa forma, ao executar o código, você verá a mensagem "Ok, promise resolvida!" exibida no console após 10 segundos.

OU

function job() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Ok, parece que funcionou!')
        }, 10000)
      })
    }

    job().then(msg => console.log(msg))*/