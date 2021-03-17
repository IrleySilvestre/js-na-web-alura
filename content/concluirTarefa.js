const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))
    atualiza()
}
const BotaoConcluir = (atualiza, id) => {
    const btnconcluir = document.createElement('button')
    btnconcluir.addEventListener('click', ()=>concluirTarefa(atualiza, id))
    btnconcluir.classList.add('check-button')
    btnconcluir.innerText = 'Concluir'
    return btnconcluir
}


export default BotaoConcluir