
const concluirTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
  
  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
  localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

  atualiza();

}

// ta usando a convensão variavel maiuscula para componente
const BotaoConclui = (atualiza, id) => {
  const botaoConclui = document.createElement('button');

  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = 'Concluído';

  botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id));

  return botaoConclui;
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