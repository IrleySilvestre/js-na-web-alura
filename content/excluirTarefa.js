const excluirTarefa = (atualiza, id)=>{
    const index = id
    const tarefasCadastrada = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastrada.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastrada))
    atualiza()
}

const BotaoExcluir = (atualiza, id)=>{
    const botaoExcluir = document.createElement('button')
    botaoExcluir.innerText = 'Excluir'
    botaoExcluir.classList.add('check-button')
    botaoExcluir.addEventListener('click', ()=>excluirTarefa(atualiza, id))
    return botaoExcluir
}


export default BotaoExcluir