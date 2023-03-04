//Exercício 2

// Função para verificar se um número pertence à sequência de Fibonacci
function verificarFibonacci(numero) {
  // Definição dos dois primeiros números da sequência
  let numeroAnterior = 0
  let numeroAtual = 1

  // Loop para calcular a sequência até o número informado ou até um número maior que ele
  while (numeroAtual <= numero) {
    // Verifica se o número informado está na sequência e retorna verdadeiro se sim
    if (numeroAtual === numero) {
      return true
    }

    // Calcula o próximo número da sequência
    const proximoNumero = numeroAnterior + numeroAtual

    // Atualiza os valores das variáveis para o próximo cálculo
    numeroAnterior = numeroAtual
    numeroAtual = proximoNumero
  }

  // Se o número informado não pertence à sequência, retorna falso
  return false
}

// Definição do número a ser verificado na sequência de Fibonacci
const numeroVerificar = 13

// Validação de entrada
if (Number.isInteger(numeroVerificar) && numeroVerificar >= 0) {
  // Verifica se o número informado pertence à sequência e exibe mensagem correspondente
  if (verificarFibonacci(numeroVerificar)) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`)
  } else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`)
  }
} else {
  console.log('Por favor, informe um número inteiro positivo.')
}
