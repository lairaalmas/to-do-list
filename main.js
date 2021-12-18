// immediatly invoked function expresion (IIFE)
// forma de encapsular codigo para nao deixar variaveis globais
// (() => {
// })();

// outra forma de melhorar codigo é modularizá-lo
import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

const criarTarefa = (evento) => { // esse 'evento' está sendo passado como argumento no eventListener

  // previne que pagina atualize
  evento.preventDefault();

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  // pega valor da entrada
  const valor = input.value;

  // cria li
  const tarefa = document.createElement('li');
  // adiciona classe a li
  tarefa.classList.add('task');
  // cria conteudo da li
  const conteudo = `<p class="content">${valor}</p>`;   // ``(acentos graves - crase) - isso é uma 'template string' - intercala codigo html com js
  // adiciona conteudo a li
  tarefa.innerHTML = conteudo;

  // adiciona botão de concluido ao li
  tarefa.appendChild(BotaoConclui());
  // adiciona botão de deletar ao li
  tarefa.appendChild(BotaoDeleta());

  // coloca li no dom
  lista.appendChild(tarefa);

  // limpa entrada
  input.value = "";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

/* métodos para gerenciar nós do DOM:
  - pai.appendChild(filho); // coloca nó no final
  - pai.insertBefore(pai, filho); // coloca um nó antes de outro nó específico
  - pai.replaceChild(elemento1, elemento2); // substitui nó elemento1 pelo nó elemento2
  - pai.removeChild(filho); // remove no da arvore a partir do pai
  - elemento.remove(); // remove no da arvore
*/