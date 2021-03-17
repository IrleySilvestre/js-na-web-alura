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
    const dataTarefa = (data.format('DD/MM/YYYY ' ))
    const concluida = false
    const horario = data.format('HH:mm')
    const dados = {
        valor,
        dataTarefa,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = " "
    carregaTarefa()

}

export const Tarefa = ({valor, horario, concluida}, id) => {
    const tarefa = document.createElement('li')
    if (concluida){
        tarefa.classList.add('done')
    }
    tarefa.classList.add('task')

    tarefa.innerHTML = `<p class="content">${horario} - ${valor}</p>`

    tarefa.appendChild(BotaoConcluir(carregaTarefa,id))
    tarefa.appendChild(BotaoExcluir(carregaTarefa,id))
    return tarefa
}

