(() => {

    const criarTarefa = (evento) => {

        evento.preventDefault()

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConcluir())
        tarefa.appendChild(BotaoExcluir())
        lista.appendChild(tarefa)
        input.value = " "

    }
    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)

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
})()





