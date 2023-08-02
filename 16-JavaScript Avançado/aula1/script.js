/*

GLOBAL
LOCAL

- O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIÁVEL

- AS FUNÇÕES NO JS CRIAM O SEU PRÓPRIO ESCOPO 
    - AS VARIÁVEIS DE UMA FUNÇÃO NÃO SÃO ACESSÍVEIS FORA DELA

*/

let a = 123

function teste() {
    console.log(a)
}

teste()