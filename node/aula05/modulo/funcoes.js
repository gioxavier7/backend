/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

// forma tradicional de criar função
function gerarNumeros(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador
    let status = false

    if(validarDados(numeroI, numeroF)){
        contador = parseInt(numeroI)

        while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            contador += 1
        }
    }

return status
}

// arrow function
const gerarNovosNumeros = (numeroInicial, numeroFinal) => {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador++){
            status = true
            console.log(contador)
        }
    }
    return status
}

// função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = true
    
    // validação de dados em branco
    if(numeroI == '' || numeroF == ''){
        console.log('ERRO: é obrigatório a entrada de todos os números.')
        status = false

    // validação de dados caracteres inválidos
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('ERRO: não é permitido a entrada de carácter.')
        status = false 
    }
    return status
}

module.exports = {
    gerarNumeros,
    gerarNovosNumeros
}