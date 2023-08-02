const clientes = [
    { name: 'Fernanda', lastname:'Fogaça', age: 14},
    { name: 'Fernando', lastname: 'Fogaça', age: 18},
    { name:'Helena', lastname: 'Pitoco', age: 20},
]

const clientesMaiores = clientes.filter (cliente => cliente.age >=18)

console.log(clientesMaiores)
