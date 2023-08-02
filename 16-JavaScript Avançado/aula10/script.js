/*

AJAX - 2005

Asynchronous JavaScript And XML

ROTAS

ENDPOINT

*/


const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText);
    const fotosDiv = document.getElementById('fotos');

    for (let i = 0; i < response.length; i++) {
      const foto = response[i];
      const img = document.createElement('img');
      img.src = foto.url;
      fotosDiv.appendChild(img);
    }
  }
};

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhttp.send();
/*
Este código cria um novo elemento <img> para cada foto na resposta, define a URL da foto como o atributo src da imagem e adiciona a imagem à <div> criada anteriormente. 
*/
