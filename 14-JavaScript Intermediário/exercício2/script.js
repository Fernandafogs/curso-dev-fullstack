

let counter = 0;
let intervalo;

const counterHtml = document.querySelector('#counter')
const btnDecrease = document.querySelector('#btn-decrease')
const btnIncrease = document.querySelector('#btn-increase')

btnDecrease.onclick = function() {
  clearInterval(intervalo); // Para o intervalo anterior, se existir
  intervalo = setInterval(function() {
    counter--
    counterHtml.innerText = counter
  }, 100)
  btnDecrease.style.backgroundColor = "red"; // Altera a cor do botão "Decrease" para vermelho
  btnIncrease.style.backgroundColor = ""; // Remove a cor do botão "Increase"
}

btnIncrease.onclick = function() {
  clearInterval(intervalo); // Para o intervalo anterior, se existir
  intervalo = setInterval(function() {
    counter++
    counterHtml.innerText = counter
  }, 100)
  btnIncrease.style.backgroundColor = "green"; // Altera a cor do botão "Increase" para verde
  btnDecrease.style.backgroundColor = ""; // Remove a cor do botão "Decrease"
}



/*
INTERVAL
HTML
<body>

    <div id="contador"></div>

    <button id="botaoPausar">Pausar</button>


    <script src="script.js"></script>
</body>
_______________________________________
JAVASCRIPT

let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval(function(){
    count++
    contador.innerText = count
}, 1)

let botaoPausar = document.querySelector('#botaoPausar')

botaoPausar.onclick = function(){
    clearInterval(intervalo)
}
*/