

let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

function removerToast(){
    toast.classList.remove('visible')
}

botaoCadastrar.onclick = function(){
    toast.classList.add('visible')

    let mensagem = document.getElementById("valor").value
    toast.innerText = `Tarefa ${mensagem} cadastrada com sucesso!`

    setTimeout(removerToast, 5000)
}
