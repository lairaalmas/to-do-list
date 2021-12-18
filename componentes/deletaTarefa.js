// ta usando a convensão variavel maiuscula para componente
const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');
  botaoDeleta.classList.add('delete-button');
  botaoDeleta.innerText = 'Deletar';

  botaoDeleta.addEventListener('click', deletarTarefa);

  return botaoDeleta;
}

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;

  const tarefaDeleta = botaoDeleta.parentElement;

  tarefaDeleta.remove();
}

export default BotaoDeleta;