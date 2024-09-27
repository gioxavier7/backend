// função de validação das entradas
function validarEntradas(numeroInicial, numeroFinal){
    if(numeroInicial === '' || numeroFinal === ''){
        console.log('Ambas as entradas devem ser preenchidas.')
        return false
    }
    if(isNaN(numeroInicial) || isNaN(numeroFinal)){
        console.log('As entradas devem ser números válidos.')
        return false
    }
    
    numeroInicial = Number(numeroInicial)
    numeroFinal = Number(numeroFinal)

    if(numeroInicial < 0 || numeroInicial > 500){
        console.log('O número inicial deve estar entre 0 e 500.')
        return false
    }
    if(numeroFinal < 100 || numeroFinal > 1000){
        console.log('O número final deve estar entre 100 e 1000.')
        return false
    }
    if(numeroInicial >= numeroFinal){
        console.log('O número inicial deve ser menor que o número final.')
        return false
    }
    if(numeroInicial === numeroFinal){
        console.log('Os números inicial e final não podem ser iguais.')
        return false
    }
    return true
}

//função para calcular números pares e ímpares
function calcularParesImpares(numeroInicial, numeroFinal){
    let pares = ''
    let impares = ''
    let contagemPares = 0
    let contagemImpares = 0

    let num = numeroInicial
    while (num <= numeroFinal){
        if(num % 2 === 0){
            pares += num + ' '
            contagemPares++
        }else{
            impares += num + ' '
            contagemImpares++
        }
        num++ 
    }

    return{
        pares: pares.trim(),
        impares: impares.trim(),
        contagemPares: contagemPares,
        contagemImpares: contagemImpares
    }
}

// função principal de processamento
function processarNumeros(numeroInicial, numeroFinal, opcao){
    let validacao = validarEntradas(numeroInicial, numeroFinal)
    if(validacao !== true){
        return validacao // retorna a mensagem de erro se a validação falhar
    }

    let resultados = calcularParesImpares(Number(numeroInicial), Number(numeroFinal))
    
    let mensagem = ''
    if(opcao === 'pares' || opcao === 'ambos'){
        mensagem += 'Números Pares: ' + resultados.pares + '\n'
        mensagem += 'Quantidade de Números Pares: ' + resultados.contagemPares + '\n'
    }
    if(opcao === 'ímpares' || opcao === 'ambos'){
        mensagem += 'Números Ímpares: ' + resultados.impares + '\n'
        mensagem += 'Quantidade de Números Ímpares: ' + resultados.contagemImpares + '\n'
    }
    return mensagem
}

module.exports = {processarNumeros}