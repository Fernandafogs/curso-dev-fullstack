
let inputNome = prompt('Digite o seu nome')
let inputIdade = prompt('Digite a sua idade')

let nome = inputNome
let idade = parseInt(inputIdade)


document.write(`Olá, ${nome}.`)

if(idade>= 18){
    document.write('Você é maior de idade!')
} else if (idade<=18){
    document.write('Você é menor de idade!')
} 


