//Exercício 4

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
}

// calcular o total de faturamento
const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0)

// calcular a representatividade percentual de cada estado e armazenar em um objeto
const representatividade = {}
for (const estado in faturamento) {
  const percentual = ((faturamento[estado] / total) * 100).toFixed(2)
  representatividade[estado] = `${percentual}%`
}

// imprimir o resultado
console.log(representatividade)
