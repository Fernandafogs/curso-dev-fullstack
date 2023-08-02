const clientes = [
    { name: 'Fernanda', score:34},
    { name: 'Fernando', score: 38},
    { name:'Helena', score: 80},
    { name: 'Marco', score: 50},
    { name: 'Frederica', score: 98},
]

// acc = accumulator
// curr = current
const clientesFinal = clientes.reduce ((acc, curr)=>{
    if (curr.score >=50){
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
},{
    pass: [],
    fail: []
} )

console.log (clientesFinal)


const numeros = [1, 2, 3, 4];

const numerosFinal = numeros.reduce((acc, curr) => {
  if (acc !== '') {
    acc += ' - '; // adiciona hífen se já tiver elementos no acumulador
  }
  acc += curr + 1; // adiciona o número atual (incrementado de 1) ao acumulador
  return acc;
}, '');

console.log(numerosFinal); // saída: "2 - 3 - 4 - 5"







/*{
    pass: []
    fail: []
}


const clientesPass = clientes. filter (cliente => cliente.score >=50)
const clientesFinalPass = clientesPass.map(cliente => cliente.name + '' + cliente.score)
console.log(clientesFinalPass)

const clientesFail = clientes. filter (cliente => cliente.score <50)
const clientesFinalFail = clientesFail.map(cliente => cliente.name + '' + cliente.score)
console.log(clientesFinalFail)
*/

