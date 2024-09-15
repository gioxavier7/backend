/*
* objetivo: juntando os exercícios 
* data: 13/09/24
* dev: giovanna
* versão: 1.1
*/

//importando as funções
var exercicio1 = require('./exercicio1/modulo/calculoImc.js')
var exercicio2 = require('./exercicio2/modulo/media.js')
var exercicio3 = require('./exercicio3/modulo/tabuada.js')
var exercicio4 = require('./exercicio4/modulo/fatorial.js')
var exercicio5 = require('./exercicio5/modulo/numeros.js')

//função do menu
function mostrarMenu(){
    console.log('Escolha uma das funcionalidades a seguir:')
    console.log('1- Cálculo IMC\n2- Controle de Notas\n3- Tabuada\n4- Fatorial\n5- Par e Ímpar')

    var readline = require('readline')

    var entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    entradaDeDados.question('Digite a funcionalidade que deseja utilizar: ', function(opcao){
        let operacaoEscolhida = opcao

        //valida a opção escolhida
        if(isNaN(operacaoEscolhida)){
            console.log('ERRO: só é permitido a entrada de números.')
            entradaDeDados.close()
        }else if(operacaoEscolhida < 1 || operacaoEscolhida > 5){
            console.log('ERRO: escolha inválida.')
        }

        //tratamento da opção escolhida
        if(operacaoEscolhida == '1'){
            console.log('Cálculo de IMC')

            entradaDeDados.question('Digite seu peso: ', function(peso){

                entradaDeDados.question('Digite sua altura: ', function(altura){

                    //chama a função
                    let resultado = exercicio1.processarImc(peso, altura)
                    console.log(resultado)
                })
            })
        }else if(operacaoEscolhida == '2'){
            console.log('Controle de Notas')

            entradaDeDados.question('Nome do aluno: ', function(nomeAluno){

                entradaDeDados.question('Sexo do aluno (F/M): ', function(sexoAluno){

                    entradaDeDados.question('Nome do professor: ', function(nomeProfessor){

                        entradaDeDados.question('Sexo do professor (F/M): ', function(sexoProfessor){

                            entradaDeDados.question('Curso: ', function(nomeCurso){

                                entradaDeDados.question('Disciplina: ', function(nomeDisciplina){

                                    entradaDeDados.question('Nota 1: ', function(nota1){

                                        entradaDeDados.question('Nota 2: ', function(nota2){

                                            entradaDeDados.question('Nota 3: ', function(nota3){

                                                entradaDeDados.question('Nota 4: ', function(nota4){

                                                    entradaDeDados.question('Nota do exame: ', function(notaExame){

                                                        let resultado = exercicio2.processarNotas(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame)
                                                        console.log(resultado)
                                                    })

                                                })

                                            })
                                            
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    })
}
mostrarMenu()