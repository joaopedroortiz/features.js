//Algoritmo que validador de CNPJ. Separe as partes do código em funções reusáveis e módulos com o mesmo contexto.

const multiplicador1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 0, 0]
const multiplicador2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 0]

function validation(cnpj) {
  return cnpj.replace(/\D/g, '')
}

function multiply1(cnpj) {
  let multCnpj1 = multiplicador1.map((elem, i) => {
    return elem * cnpj[i]
  })

  return multCnpj1
}

function multiply2(cnpj) {
  let multCnpj2 = multiplicador2.map((elem, i) => {
    return elem * cnpj[i]
  })

  return multCnpj2
}

function validação(cnpj) {
  try {
    let reducedCNPJ1 = multiply1(validation(cnpj)).reduce((acc, elem) => {
      return acc + elem
    })

    let reducedCNPJ2 = multiply2(validation(cnpj)).reduce((acc, elem) => {
      return acc + elem
    })

    let dig1 = 0
    let dig2 = 0
    let modReduce1 = reducedCNPJ1 % 11
    let modReduce2 = reducedCNPJ2 % 11
    if (modReduce1 < 2) {
      dig1 = 0
    } else {
      dig1 = 11 - modReduce1
    }

    if (modReduce2 < 2) {
      dig2 = 0
    } else {
      dig2 = 11 - modReduce2
    }

    if (Number.isNaN(dig1)) {
      throw new Error('Erro: digito não numérico')
    }
    console.log(dig1)
    console.log(dig2)
  } catch (err) {
    console.log(err.message)
  }
}

//o primeiro numero dos ultimos dois digitos é igual ao resultado de (validação com modulo 11) menos o resultado

const CocaColaErrado = '45.997.418/00a1-53'
const CocaCola = '45.997.418/0001-53'
const cnpjExe = '11.222.333/0001-81'
validação(cnpjExe)
