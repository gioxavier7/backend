/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 13/09/24
* dev: giovanna
* versão: 1.1
*/

// função para validar os dados IMC
function validarDadosImc(peso, altura) {
    let status = true
    
    if (peso === '' || altura === '') {
        console.log("ERRO: é obrigatório a entrada dos dados.")
        status = false

    } else if (isNaN(peso) || isNaN(altura)) {
        console.log("ERRO: não é permitido a entrada de caracteres.")
        status = false
    }
    return status
}

// função para calcular o IMC
function calcularIMC(peso, altura) {
    let numeroPeso = peso
    let numeroAltura = altura

    return numeroPeso / (numeroAltura * numeroAltura)
}

// função para verificar a categoria do IMC
function verificarCategoriaImc(imc) {
    let categoriaImc

    if (imc < 18.5) {
        categoriaImc = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoriaImc = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        categoriaImc = 'Acima do peso'
    } else if (imc >= 30 && imc <= 34.9) {
        categoriaImc = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        categoriaImc = 'Obesidade II'
    } else if (imc >= 40) {
        categoriaImc = 'Obesidade III'
    }

    return categoriaImc
}

// função principal para processar o cálculo do IMC e exibir o resultado
function processarImc(peso, altura) {
    if (validarDadosImc(peso, altura)) {
        let imc = calcularIMC(peso, altura)
        let categoriaImc = verificarCategoriaImc(imc)

        console.log(`IMC calculado: ${imc.toFixed(2)}\nCategoria: ${categoriaImc}`)
    }else{
        console.log('Erro ao processar.')
        return false
    }
}

module.exports = {processarImc}