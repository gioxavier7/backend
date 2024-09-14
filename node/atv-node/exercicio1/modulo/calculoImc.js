/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 13/09/24
* dev: giovanna
* versão: 1.1
*/

// Função para validar os dados IMC
function validarDadosImc(peso, altura) {
    if (peso === '' || altura === '') {
        console.log("ERRO: é obrigatório a entrada dos dados.")
        return false
    } else if (isNaN(peso) || isNaN(altura)) {
        console.log("ERRO: não é permitido a entrada de caracteres.")
        return false
    }
    return true
}

// Função para converter o número para string, substituir a vírgula por ponto e converter de volta para número
function converterVirgula(valor) {
    return parseFloat(valor.toString().replace(',', '.'))
}

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    const numeroPeso = converterVirgula(peso);
    const numeroAltura = converterVirgula(altura)

    return numeroPeso / (numeroAltura * numeroAltura)
}

// Função para verificar a categoria do IMC
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

// Função principal para processar o cálculo do IMC e exibir o resultado
function processarImc(peso, altura) {
    if (validarDadosImc(peso, altura)) {
        const imc = calcularIMC(peso, altura)
        const categoriaImc = verificarCategoriaImc(imc)

        console.log(`IMC calculado: ${imc.toFixed(2)}\nCategoria: ${categoriaImc}`)
        return true;
    }
    return false
}