import BotaoExcluir from './content/excluirTarefa.js'
import BotaoConcluir from './content/concluirTarefa.js'

const handleNovoItem = (evento)=>{
    evento.preventDefault()
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
    const criaTarefa = criarTarefa(dados)
    lista.appendChild(criaTarefa)
    input.value = " "

}

const criarTarefa = ({valor, dataTarefa}) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataTarefa} ${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoExcluir())
    return tarefa
}
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)






