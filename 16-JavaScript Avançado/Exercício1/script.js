
const alunos = [
  {
    nome: 'Maria',
    sobrenome: 'da Silva',
  },
  {
    nome: 'José',
    sobrenome: 'Moreira',
  },
  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
  },
  {
    nome: 'Pedro',
    sobrenome: 'Souza',
  },
]

let alunosFinal = []

alunos.forEach (function(aluno){
  alunosFinal.push(aluno.nome + '' + aluno.sobrenome)
})

const alunosFinalMap = alunos.map (aluno => aluno.nome + '' + aluno.sobrenome )

console.log(alunosFinalMap)

/*
    const arrNomes = alunos.map(aluno => `${aluno.nome} ${aluno.sobrenome}`)

    console.log(arrNomes)
*/
