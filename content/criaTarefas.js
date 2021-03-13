import BotaoExcluir from './excluirTarefa.js'
import BotaoConcluir from './concluirTarefa.js'

const handleNovoItem = (evento)=>{
    evento.preventDefault()
    const tarefas = JSON.parse( localStorage.getItem('tarefas')) || []
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataTarefa = (data.format('DD / MM / YYYY HH:mm' ))

    const dados = {
        valor,
        dataTarefa
    }

    const tarefasAtualizadas = [...tarefas, dados]
    const criaTarefa = Tarefa(dados)

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))
    lista.appendChild(criaTarefa)
    input.value = " "

}

const Tarefa = ({valor, dataTarefa}) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataTarefa} ${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoExcluir())
    return tarefa
}

export default handleNovoItem
