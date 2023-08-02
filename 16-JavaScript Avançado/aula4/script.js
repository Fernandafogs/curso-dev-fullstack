const clientes = [
    { name: 'Fernanda', lastname:'Fogaça'},
    { name: 'Fernando', lastname: 'Fogaça'},
    { name:'Helena', lastname: 'Pitoco'},
]

//['Fenanda Fogaça', 'Fernando Fogaça', 'Helena Pitoco']

let clientesFinal = []

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + '' + cliente.lastname)
})

console.log(clientesFinal)


const clientesFinalMap = clientes.map(cliente => cliente.name + '' + cliente.lastname)

console.log(clientesFinalMap)