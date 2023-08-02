
const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: [7, 10, 8, 5, 7, 9],
  };
  
const soma = aluno.nota.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// o método reduce para somar todas as notas, começando com um valor inicial de 0. 
const media = Math.round(soma / aluno.nota.length)
// a função Math.round serve para arredondar o valor, se não ele ficaria algo como: 7.666666666666667
//Em seguida, dividimos a soma pelo comprimento do array aluno.nota para obter a média.

console.log(`A média da ${aluno.nome} foi ${media} para o total de ${aluno.nota.length} bimestres`)
