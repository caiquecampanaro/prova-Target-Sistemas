//Exercício 3

fetch('caminho/para/o/arquivo.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    const faturamentoDiario = data.faturamentoDiario

    const menorFaturamento = calcularMenorFaturamento(faturamentoDiario)
    const maiorFaturamento = calcularMaiorFaturamento(faturamentoDiario)
    const mediaMensal = calcularMediaMensal(faturamentoDiario)
    const diasAcimaDaMedia = calcularDiasAcimaDaMedia(
      faturamentoDiario,
      mediaMensal
    )

    console.log(`Menor faturamento: ${menorFaturamento}`)
    console.log(`Maior faturamento: ${maiorFaturamento}`)
    console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`)
  })
  .catch(error => console.error(error))

function calcularMenorFaturamento(faturamentoDiario) {
  return Math.min(...faturamentoDiario)
}

function calcularMaiorFaturamento(faturamentoDiario) {
  return Math.max(...faturamentoDiario)
}

function calcularMediaMensal(faturamentoDiario) {
  const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0)
  return (
    diasComFaturamento.reduce((acc, valor) => acc + valor, 0) /
    diasComFaturamento.length
  )
}

function calcularDiasAcimaDaMedia(faturamentoDiario, mediaMensal) {
  const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0)
  return diasComFaturamento.filter(valor => valor > mediaMensal).length
}
