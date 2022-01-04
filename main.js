// immediatly invoked function expresion (IIFE)
// forma de encapsular codigo para nao deixar variaveis globais
// (() => {
// })();

// outra forma de melhorar codigo é modularizá-lo
import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

const handleNovoItem = (evento) => {

  // previne que pagina atualize
  evento.preventDefault();

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  // pega valor da entrada
  const valor = input.value;

  const calendario = document.querySelector('[data-form-date]')
  // 'moment' é uma biblioteca de manipulação de data
  const data = moment(calendario.value);
  const dataFormatada = data.format('DD/MM/YYYY');

  const dados = {
    valor, 
    dataFormatada
  }
  const criaTarefa = criarTarefa(dados);

  // coloca li no dom
  lista.appendChild(criaTarefa);

  // limpa entrada
  input.value = "";
}

const criarTarefa = ({valor, dataFormatada}) => { // esse 'evento' está sendo passado como argumento no eventListener

  // cria li
  const tarefa = document.createElement('li');
  // adiciona classe a li
  tarefa.classList.add('task');
  // cria conteudo da li
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;   // ``(acentos graves - crase) - isso é uma 'template string' - intercala codigo html com js
  // adiciona conteudo a li
  tarefa.innerHTML = conteudo;

  // adiciona botão de concluido ao li
  tarefa.appendChild(BotaoConclui());
  // adiciona botão de deletar ao li
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

/* métodos para gerenciar nós do DOM:
  - pai.appendChild(filho); // coloca nó no final
  - pai.insertBefore(pai, filho); // coloca um nó antes de outro nó específico
  - pai.replaceChild(elemento1, elemento2); // substitui nó elemento1 pelo nó elemento2
  - pai.removeChild(filho); // remove no da arvore a partir do pai
  - elemento.remove(); // remove no da arvore
*/