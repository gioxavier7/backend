/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

function gerarNumeros(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador
    let status = false

    // validação de dados em branco
    if(numeroI == '' || numeroF == ''){
        console.log('ERRO: é obrigatório a entrada de todos os números.')

    // validação de dados caracteres inválidos
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('ERRO: não é permitido a entrada de carácter.')
    }else{
        contador = parseInt(numeroI)

        while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            contador += 1
        }
    }

return status
}

gerarNumeros(1, 10)