import { Tarefa } from "./criaTarefa.js";

export const carregaTarefa = () => {

  const lista = document.querySelector('[data-list]');

  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

  // limpa lista anterior para atuala-la
  lista.innerHTML = " ";

  // Atualiza na tela
  tarefasCadastradas.forEach( tarefa => {
    lista.appendChild(Tarefa(tarefa));
  });

}