const personagens = document.querySelectorAll('.personagem')

//adicionar a classe selecionando
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    if (window.innerWidth < 450) {
      window.scroll({ top: 0, behavior: 'smooth' })
    }

    removerSelecaoDoPersonagem()

    personagem.classList.add('selecionado')

    alterarImagemPersonagemSelecionado(personagem)

    alterarNomePersonagemSeleciondo(personagem)

    alterarDescricaoPersonagem(personagem)

  })
})
function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem')
  descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSeleciondo(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem')
  nomePersonagem.innerHTML = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande')
  console.log(imagemPersonagemGrande)


  const idPersonagem = personagem.attributes.id.value
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado')
  personagemSelecionado.classList.remove('selecionado')
}

