
// ta usando a convensão variavel maiuscula para componente
const BotaoConclui = () => {
  const botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = 'Concluído';

  botaoConclui.addEventListener('click', concluirTarefa);

  return botaoConclui;
}

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle('done');
}

// modularizando o codigo
export default BotaoConclui;

/*
  export {
    BotaoConclui,
    concluirTarefa
  }
*/

/*
  export const BotaoConclui = () => { ...
*/