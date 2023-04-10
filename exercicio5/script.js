
let inputTabuada = prompt('Digite qual tabuada você quer saber')
  
let tabuada = parseInt(inputTabuada)

for(let i = 0; i <=10; i ++){
    document.write(`${tabuada} x ${i} = ${tabuada * i}`)
    document.write(`<br>`)
}


