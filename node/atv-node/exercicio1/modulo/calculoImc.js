/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

// função para validar os dados IMC
function validarDadosImc(peso, altura){
    if (peso == '' || altura == ''){
        console.log("ERRO: é obrigatório a entrada dos dados.")
        return false
    }
    else if (isNaN(peso) || isNaN(altura)){
        console.log("ERRO: não é permitido a entrada de caracteres.")
        return false
    }
    return true
}

// função para converter o número para string (toString), substitui a vírgula por ponto, e depois converte de volta para número
function converterVirgula(valor){
    return valor.toString().replace(',', '.')
}

// calculo IMC
function calcularIMC(peso, altura){
    let numeroPeso = peso
    let numeroAltura = altura
    let imc
    let categoriaImc
    let status = false

    if (validarDadosImc(numeroPeso, numeroAltura)){
        imc = converterVirgula(numeroPeso) / (converterVirgula(numeroAltura) * converterVirgula(numeroAltura))
        status = true

        //verificação do IMC
        if(imc < 18.5){
            categoriaImc = 'Abaixo do peso'
        }else if(imc >= 18.5 && imc <= 24.9){
            categoriaImc = 'Peso normal'
        }else if(imc >= 25 && imc <= 29.9){
            categoriaImc = 'Acima do peso'
        }else if(imc >= 30 && imc <= 34.9){
            categoriaImc = 'Obesidade I'
        }else if(imc >= 35 && imc <= 39.9){
            categoriaImc = 'Obesidade II'
        }else if(imc >= 40){
            categoriaImc = 'Obesidade III'
        }

        console.log(`IMC calculado: ${imc.toFixed(2)}\nCategoria: ${categoriaImc}`)
    }
    return status
}