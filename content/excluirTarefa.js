const BotaoExcluir = ()=>{
    const botaoExcluir = document.createElement('button')
    botaoExcluir.innerText = 'Excluir'
    botaoExcluir.classList.add('check-button')
    botaoExcluir.addEventListener('click', excluirTarefa)
    return botaoExcluir
}

const excluirTarefa = (evento)=>{
    const btnClicado = evento.target
    const tarefaApagar = btnClicado.parentElement
    tarefaApagar.remove()
}

export default BotaoExcluir