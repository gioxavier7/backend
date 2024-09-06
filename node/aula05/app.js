/*
* objetivo: 
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/
// import da função
var numeros = require('./modulo/funcoes.js')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor inicial: ', function(valor1){
    let numeroInicial = valor1

    entradaDados.question('Digite o valor final: ', function(valor2){
        let numeroFinal = valor2

        if(!numeros.gerarNumeros(numeroInicial, numeroFinal)){
            console.log('Não foi possível processar a requisição.')
        }
    })
})