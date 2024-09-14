// Função de validação dos dados
function validarEntrada(numero) {
    if (numero === '') {
        return 'A entrada não pode estar vazia.'
    }
    if (isNaN(numero)) {
        return 'A entrada deve ser um número válido.'
    }
    numero = Number(numero) // Converte para número
    if (numero < 1) {
        return 'Não existe fatorial de 0 e o número deve ser maior do que 1.'
    }
    return true // Retorna true se a validação estiver correta
}

// Função para calcular o fatorial
function calcularFatorial(numero) {
    var fatorial = 1 // Inicializa o resultado

    var valor = numero
    while (valor > 1) {
        fatorial *= valor
        valor-- //decrementa (valor++ valor--)
    }

    return fatorial
}

// Função principal de processamento
function processarFatorial(entrada) {
    var validacao = validarEntrada(entrada)
    if (validacao !== true) {
        return validacao
    }

    var numero = Number(entrada)
    if (numero === 1) {
        return 'Não é possível calcular o fatorial de 1. O número deve ser maior do que 1.'
    }

    var resultado = calcularFatorial(numero)
    return 'Fatorial de ' + numero + ' é ' + resultado + '.'
}

module.exports = {processarFatorial}