/*
 * objetivo: arquivos de funções para realizar calculos matemáticos das quatro operações
 * data: 30/08/24
 * dev: giovanna
 * versão: 1.0
 */


//função para realizar as quatro operações matemáticas
function calculadora(valor1, valor2, operacao) {
    //entrada de dados
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado

    //processamento dos calculos matemáticos
    // if(tipoCalculo.toUpperCase() == 'SOMAR'){
    //     resultado = Number(numero1) + Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'SUBTRAIR'){
    //     resultado = Number(numero1) - Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'MULTIPLICAR'){
    //     resultado = Number(numero1) * Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'DIVIDIR'){
    //     if(numero2 == 0){
    //         console.log('ERRO: não é possível realizar divisão por 0.')
    //     }else{
    //         resultado = Number(numero1) / Number(numero2)
    //     }
    // }else{
    //     console.log('ERRO: A operação escolhida não é válida.')
    // }

    switch (tipoCalculo.toUpperCase()) {
        case 'SOMAR':
            resultado = Number(numero1) + Number(numero2)
            break;

        case 'SUBTRAIR':
            resultado = Number(numero1) - Number(numero2)
            break;

        case 'MULTIPLICAR':
            resultado = Number(numero1) * Number(numero2)
            break;

        case 'DIVIDIR':
            if(numero2 == 0){
                console.log('ERRO: não é possível realizar divisão por 0.')
            }else{
                resultado = Number(numero1) / Number(numero2)
            }
            break

        default:
            console.log('ERRO: A operação escolhida não é válida.')
            break;
    }

    if(resultado != undefined){
        return resultado.toFixed(2)
    }else{
        return false
    }
}

module.exports = {
    calculadora
}