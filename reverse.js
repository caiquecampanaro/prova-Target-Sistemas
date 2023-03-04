//Exercício 5

let minhaString = 'exemplo' // string a ser invertida
let stringInvertida = '' // string invertida inicialmente vazia

// Percorre a string de trás para frente e adiciona cada caractere na stringInvertida
for (let i = minhaString.length - 1; i >= 0; i--) {
  stringInvertida += minhaString[i]
}

console.log(stringInvertida) // imprime "olpmexe"
