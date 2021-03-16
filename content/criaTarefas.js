import BotaoExcluir from './excluirTarefa.js'
import BotaoConcluir from './concluirTarefa.js'
import {carregaTarefa} from "./carregaTarefa.js";

export const handleNovoItem = (evento)=>{
    evento.preventDefault()
    const tarefas = JSON.parse( localStorage.getItem('tarefas')) || []
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

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = " "
    carregaTarefa()

}

export const Tarefa = ({valor, dataTarefa}) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataTarefa} ${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoExcluir())
    return tarefa
}

