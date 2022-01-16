// entre chaves pois não é a função padrao (unica) do arquivo (precisa especificar)
import { handleNovoItem } from "./componentes/criaTarefa.js";
import { carregaTarefa } from "./componentes/carregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();

/* métodos para gerenciar nós do DOM:
  - pai.appendChild(filho); // coloca nó no final
  - pai.insertBefore(pai, filho); // coloca um nó antes de outro nó específico
  - pai.replaceChild(elemento1, elemento2); // substitui nó elemento1 pelo nó elemento2
  - pai.removeChild(filho); // remove no da arvore a partir do pai
  - elemento.remove(); // remove no da arvore
*/