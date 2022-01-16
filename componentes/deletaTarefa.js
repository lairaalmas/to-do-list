const deletarTarefa = (atualiza, id) => {

  const index = id;
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

  tarefasCadastradas.splice(index, 1); // (onde quer demover, quantos depois dele : 1 é so ele mesmo)

  localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

  atualiza();
  
}

// ta usando a convensão variavel maiuscula para componente
const BotaoDeleta = (atualiza, id) => {
  const botaoDeleta = document.createElement('button');
  botaoDeleta.classList.add('delete-button');
  botaoDeleta.innerText = 'Deletar';

  botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id));

  return botaoDeleta;
}

export default BotaoDeleta;