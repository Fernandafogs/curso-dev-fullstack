/*

LOCAL STORAGE

*/

//variavel constante dentro de [] para colocar no formato JSON
const tarefas = [
    {tarefa: 'estudar js'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'},
]

//variavel constante sendo transformada no formato JSON
const tarefasJson = JSON.stringify(tarefas)

//apresentação da informações que serão apresentadas no Application em que aparecerão a coluna key de Tarefas e a coluna value com as tarefas do cons tarefasJson em formato Json
localStorage.setItem('tarefas', tarefasJson)

//variavel constante das tarefas que serão apresentadas no console
const listaTarefasSalvas = localStorage.getItem('tarefas')

//variavel constante que será apresentada no console sendo transformada do formato JSON para objeto
const listaTarefasObj = JSON.parse (listaTarefasSalvas)

//objetos sendo chamados para serem apresentados no console
console.log(listaTarefasObj)


