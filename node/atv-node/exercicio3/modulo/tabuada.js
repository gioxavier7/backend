//validação de dados
function validarDados(primeiraTabuada, ultimaTabuada, contadorInicial, contadorFinal){
    let tabuadaInicial = primeiraTabuada
    let tabuadaFinal = ultimaTabuada
    let inicio = contadorInicial
    let final = contadorFinal
    let status = true

    //validação de dados em branco
    if( tabuadaInicial == '' || tabuadaFinal == '' || inicio == '' || final == ''){
        console.log('ERRO: todos os campos devem ser preechidos.')
        status = false
    //validação se é um numero
    }else if( isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(inicio) || isNaN(final) ){
        console.log('ERRO: só é permitido a entrada de números')
        status = false
    //validação se entrada da tabuada é válida
    }else if(tabuadaInicial >= 2 && tabuadaInicial >= 100 || tabuadaFinal >= 2 && tabuadaFinal >= 100 ){
        console.log('ERRO: só permitido tabuada entre 2 e 100')
        status = false
    }else if(tabuadaFinal < tabuadaInicial){
        console.log('ERRO: é obrigatório que a primeira tabuada seja menor que a segunda.')
    }else if(inicio < 1 || inicio >= 50 && final < 1 || final >= 50 ){
        console.log('ERRO: só pode ser calculada entre 1 e 50.')
    }
    return status
}

function calcularTabuada(primeiraTabuada, ultimaTabuada, contadorInicial, contadorFinal){
    let tabuadaInicial = Number(primeiraTabuada)
    let tabuadaFinal = Number(ultimaTabuada)
    let primeiroContador = Number(contadorInicial)
    let ultimoContador = Number(contadorFinal)
    let status = false
    let resultado 

    if(validarDados(tabuadaInicial, tabuadaFinal, primeiroContador, ultimoContador)){
        while(tabuadaInicial <= tabuadaFinal){
            //funcionamento da repetição da tabuada
            console.log(`Tabuada do ${tabuadaInicial}`)
            while(primeiroContador <= ultimoContador){
                resultado = Number(tabuadaInicial) * Number(primeiroContador)
                console.log(`${tabuadaInicial} X ${primeiroContador} = ${resultado}`)
                primeiroContador += 1
                status = true
                
            }
    
            primeiroContador = contadorInicial
            tabuadaInicial += 1
        }

    }
    return status
}
console.log(calcularTabuada(4, 9, 5, 15))