
let nome = prompt('Digite seu nome')
if (nome === 'Fernanda Fogaça' || nome === 'fernanda fogaça'){
    document.write(`Olá ${nome}, você será uma grande dev full stack javascript!`)
} else {
    document.write('Olá, seja bem-vindo(a).')
}

let idade = prompt('Digite a sua idade')
if(idade>= 18){
    document.write('Você é maior de idade!')
} else if (idade<=18){
    document.write('Você é menor de idade!')
} 



