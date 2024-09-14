// Função de validação dos dados
function validarEntradas(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)) {
        console.log('Todos os valores devem ser numéricos.')
        return false
    }
    if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('A tabuada deve estar entre 2 e 100.')
        return false
    }
    if (contadorInicial < 1 || contadorInicial > 50 || contadorFinal < 1 || contadorFinal > 50) {
        console.log('O contador deve estar entre 1 e 50.')
        return false
    }
    if (tabuadaFinal < tabuadaInicial) {
        console.log('A tabuada final não pode ser menor que a inicial.')
        return false
    }
    if (contadorFinal < contadorInicial) {
        console.log('O contador final não pode ser menor que o inicial.')
        return false
    }
    return true 
}

//função para calcular a tabuada
function calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    var resultado = ''  //guardando o resultado

    var tabuada = tabuadaInicial
    while (tabuada <= tabuadaFinal) {
        var contador = contadorInicial
        resultado += 'Tabuada do ' + tabuada + ':\n'

        while (contador <= contadorFinal) {
            resultado += tabuada + ' x ' + contador + ' = ' + (tabuada * contador) + '\n'
            contador++
        }

        tabuada++  //incrementando a tabuada
        resultado += '\n'  //quebra de linha
    }

    return resultado
}

//função principal de processamento
function processarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    var validacao = validarEntradas(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
    if (validacao !== true) {
        return validacao  //se a validação falhar, retorna a mensagem de erro
    }

    return calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
}