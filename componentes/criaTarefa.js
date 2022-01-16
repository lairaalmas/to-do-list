// immediatly invoked function expresion (IIFE)
// forma de encapsular codigo para nao deixar variaveis globais
// (() => {
// })();

// JSON.stringify(arg) : transforma para string
// JSON.parse(arg) : transforma de volta apra objeto

// outra forma de melhorar codigo é modularizá-lo
import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';

export const handleNovoItem = (evento) => {

  // previne que pagina atualize
  evento.preventDefault();

  // Se não tiver nada lá inicia um array vazio
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const input = document.querySelector('[data-form-input]');
  // pega valor da entrada
  const valor = input.value;

  const calendario = document.querySelector('[data-form-date]');
  // 'moment' é uma biblioteca de manipulação de data
  const data = moment(calendario.value);
  const horario = data.format('HH:mm')
  const dataFormatada = data.format('DD/MM/YYYY');
  // estado atual do botao de concluir
  const concluida = false; 

  const dados = {
    valor, 
    dataFormatada,
    horario,
    concluida
  }

  // eu poderia só dar um push aqui?
  const tarefasAtualizadas = [...tarefas, dados];

  // ( "key", "value" )
  localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

  // limpa entrada
  input.value = " ";

  carregaTarefa();

}

// O inicio com letra maiuscula esta indicando que é um componente 
export const Tarefa = ({valor, horario, concluida}, id) => {

  // cria li
  const tarefa = document.createElement('li');

  // cria conteudo da li
  const conteudo = `<p class="content">(${horario}) ${valor}</p>`;   // ``(acentos graves - crase) - isso é uma 'template string' - intercala codigo html com js
  
  if (concluida) {
    tarefa.classList.add('done');
  }
  // adiciona classe a li
  tarefa.classList.add('task');

  // adiciona conteudo a li
  tarefa.innerHTML = conteudo;

  // adiciona botão de concluido ao li
  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  // adiciona botão de deletar ao li
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
}
