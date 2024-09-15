// Função de validação dos dados
function validarEntrada(numero){
    if (numero === ''){
        console.log('A entrada não pode estar vazia.')
        return false
    }
    if (isNaN(numero)){
        console.log('A entrada deve ser um número válido.')
        return false
    }
    numero = Number(numero)
    if (numero < 1){
        console.log('Não existe fatorial de 0 e o número deve ser maior do que 1.')
        return false
    }
    return true
}

// Função para calcular o fatorial
function calcularFatorial(numero){
    let fatorial = 1 //inicia o resultado

    let valor = numero
    while (valor > 1){
        fatorial *= valor
        valor-- //decrementa (valor++ valor--)
    }

    return fatorial
}

//função principal de processamento
function processarFatorial(entradaFatorial){
    let validacao = validarEntrada(entradaFatorial)
    if (validacao !== true){
        return validacao
    }

    let numero = Number(entradaFatorial)
    if (numero === 1){
        console.log('Não é possível calcular o fatorial de 1. O número deve ser maior do que 1.')
        return false
    }

    let resultado = calcularFatorial(numero)
    return 'Fatorial de ' + numero + ' é ' + resultado + '.'
}

module.exports = {processarFatorial}