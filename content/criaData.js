import {Tarefa} from "./criaTarefas.js";

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataTopo = document.createElement('li')
    const dataMoment = moment(data, 'DD/MM/YYYY')
    dataTopo.innerHTML = `<p class="content-data" > ${dataMoment.format('DD/MM/YYYY')}</p>`

    tarefas.forEach((tarefa, id) => {
        const dia = moment(tarefa.dataTarefa, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia)

        if(diff === 0) {
            dataTopo.appendChild(Tarefa(tarefa, id))
        }
    })

    return dataTopo
}