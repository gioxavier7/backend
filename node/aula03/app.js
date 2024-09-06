/*
* objetivo: realizar tratamento de entrada de dados, manipulação de estruturas condicionais.
* data: 09/08/24
* dev: giovanna
* versão: 1.0
*/

const { stdin, stdout } = require('process')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('digite o nome do aluno: ', function(nome){
    let nomeAluno = nome

    entradaDeDados.question('digite o nome do curso: ', function(curso){
        let cursoAluno = curso

        entradaDeDados.question('digite a nota 1: ', function(valor1){
            let nota1 = valor1

            entradaDeDados.question('digite a nota 2: ', function(valor2){
                let nota2 = valor2

                entradaDeDados.question('digite a nota 3: ', function(valor3){
                    let nota3 = valor3

                    entradaDeDados.question('digite a nota 4: ', function(valor4){
                        let nota4 = valor4

                        //variaável resultado
                        let resultado  
                        let situacao                      

                        //validação para verificar entrada vazia
                        if(nomeAluno == '' || cursoAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                            console.log('ERRO: é obrigatório preencher todos os campos')
                        }else{

                            //validação para entrada de dados numéricos
                            if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                                console.log('ERRO: é obrigatório a entrada de dados numéricos nas notas.')
                            }else{

                                //validação para permitir somente números de 0 até 10
                                if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                                    console.log('ERRO: permitido somente valores entre 0 e 10 nas notas.')
                                }else{

                                    //processamento para calcular a média final do aluno
                                    resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

                                    //verificar a situação do aluno
                                    if(resultado >= 7 && resultado <= 10){
                                        situacao = 'Aprovado.'
                                    }else{
                                        if(resultado >= 5 && resultado <= 6.9){
                                            situacao = 'Recuperação.'
                                        }else{
                                            if(resultado >= 0 && resultado <= 4.9){
                                                situacao = 'Reprovado'
                                            }
                                        }
                                    }

                                    //printar as informações
                                    console.log(`-----Boletim-----
                                            Nome: ${nomeAluno}
                                            Curso: ${cursoAluno}
                                            Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}
                                            Média: ${resultado.toFixed(1)}
                                            Situação: ${situacao}`)

                                            entradaDeDados.close()
                                }
                            }
                        }
                    })
                })
            })

        })
    })
})