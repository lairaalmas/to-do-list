/* Aqui ha funções auxiliares */

// datas vem do local storage
export const removeDatasRepetidas = (datas) => {
  
  const datasUnicas = []

  datas.forEach(data => {
    // retorna o primeiro indice em que o elemento pode ser encontrado no array (-1 se não existe)
    if (datasUnicas.indexOf(data.dataFormatada) == -1) {
      datasUnicas.push(data.dataFormatada)
    }
  });

  return datasUnicas;

}

export const ordenaDatas = (data) => {
  data.sort((a, b) => {
    const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
    const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
    return primeiraData - segundaData;
  });
}