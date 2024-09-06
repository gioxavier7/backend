/*
 * objetivo: realizar calculos matemáticos das quatro operações
 * data: 30/08/24
 * dev: giovanna
 * versão: 1.0
 */

//import do arquivo de funções
var calculos = require('./modulo/calculos.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor 1: ', function(valor1){
    let numero1 = String(valor1).replace(',','.')

    entradaDados.question('Digite o valor 2: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')

        entradaDados.question('Escolha a operação: [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]: ', function(operação){
            let tipoCalculo = operação
            let resultado

            if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                console.log('ERRO: é obrigatório a entrada de todos os dados.')
            }else if(isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: é obrigatório a entrada de dados numérios nos valores')
            }else{

                resultado = calculos.calculadora(numero1, numero2, tipoCalculo)
                
                if(resultado){
                    console.log(resultado)
                }
            }
        })
    })
})