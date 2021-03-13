const BotaoConcluir = () => {
    const btnconcluir = document.createElement('button')
    btnconcluir.addEventListener('click', concluirTarefa)
    btnconcluir.classList.add('check-button')
    btnconcluir.innerText = 'Concluir'
    return btnconcluir
}

const concluirTarefa = (evento) => {
    const btnClicado = evento.target
    const tarefaCompleta = btnClicado.parentElement
    tarefaCompleta.classList.toggle('done')
}

export default BotaoConcluir