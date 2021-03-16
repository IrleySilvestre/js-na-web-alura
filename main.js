import {handleNovoItem} from './content/criaTarefas.js'
import {carregaTarefa} from "./content/carregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()







