/*
HOISTING (IÇAR, ERGUER)

Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo de um escopo.

*/


function teste() {
    function outraFuncao(){
        console.log('ok, sou a outra função')
    }

    outraFuncao()
}

teste()