const cidades = {
  sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

const formCadastro = document.querySelector('#form-cadastro')
const selectEstados = document.querySelector('#select-estados')
const selectCidades = document.querySelector('#select-cidades')
const divCidades = document.querySelector('#div-cidades')



selectEstados.onchange = function(e) {
  const estado = e.target.value

  let listaCidades

  if (estado === 'sp') {
    listaCidades = cidades.sp
  }

  if (estado === 'rj') {
    listaCidades = cidades.rj
  }
  
  let htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`
  
  for(let cidade of listaCidades) {
    htmlCidades += `<option value='${cidade}'>${cidade}</option>`
  }

  selectCidades.innerHTML = htmlCidades
  divCidades.classList.add('visible')      
}

