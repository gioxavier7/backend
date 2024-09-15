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
    console.log('1- Cálculo IMC\n2- Controle de Notas\n3- Tabuada\n4- Fatorial\n5- Par e Ímpar\n6- Sair')

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
        }else if(operacaoEscolhida < 1 || operacaoEscolhida > 6){
            console.log('ERRO: escolha inválida.')
            entradaDeDados.close()
            mostrarMenu()
        }

        //tratamento da opção escolhida
        if(operacaoEscolhida == '1'){
            console.log('Cálculo de IMC')

            entradaDeDados.question('Digite seu peso: ', function(peso){

                entradaDeDados.question('Digite sua altura: ', function(altura){

                    //chama a função
                    let resultado = exercicio1.processarImc(Number(peso), Number(altura))
                    console.log(resultado)
                    entradaDeDados.close()
                    mostrarMenu()
                })
            })
        }else if(operacaoEscolhida == '2'){
            console.log('Controle de Notas')

            entradaDeDados.question('Nome do aluno: ', function(nomeAluno){

                entradaDeDados.question('Sexo do aluno (F/M): ', function(sexoAluno){
                    sexoAluno = sexoAluno.toUpperCase()

                    entradaDeDados.question('Nome do professor: ', function(nomeProfessor){

                        entradaDeDados.question('Sexo do professor (F/M): ', function(sexoProfessor){
                            sexoProfessor = sexoProfessor.toUpperCase()

                            entradaDeDados.question('Curso: ', function(nomeCurso){

                                entradaDeDados.question('Disciplina: ', function(nomeDisciplina){

                                    entradaDeDados.question('Nota 1: ', function(nota1){

                                        entradaDeDados.question('Nota 2: ', function(nota2){

                                            entradaDeDados.question('Nota 3: ', function(nota3){

                                                entradaDeDados.question('Nota 4: ', function(nota4){

                                                    let resultado = exercicio2.processarNotas(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, Number(nota1), Number(nota2), Number(nota3), Number(nota4))
                                                    console.log(resultado)

                                                    if (resultado === 'Em exame') {
                                                        entradaDeDados.question('Digite a nota do exame: ', function(notaExame){
                                                            let resultadoFinal = exercicio2.processarNotas(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, Number(nota1), Number(nota2), Number(nota3), Number(nota4), Number(notaExame))
                                                            console.log(resultadoFinal)
                                                            entradaDeDados.close()
                                                            mostrarMenu()
                                                        })
                                                    }else{
                                                        entradaDeDados.close()
                                                        mostrarMenu()
                                                    }
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
        }else if(operacaoEscolhida == '3'){
            console.log('Tabuada')

            entradaDeDados.question('Tabuada inicial (entre 2 e 100): ', function(tabuadaInicial){

                entradaDeDados.question('Tabuada final: ', function(tabuadaFinal){

                    entradaDeDados.question('Contador inicial (entre 1 e 50): ', function(contadorInicial){

                        entradaDeDados.question('Contador final: ', function(contadorFinal){

                            let resultado = exercicio3.processarTabuada(Number(tabuadaInicial), Number(tabuadaFinal), Number(contadorInicial), Number(contadorFinal))
                            console.log(resultado)
                            entradaDeDados.close()
                            mostrarMenu()
                        })
                    })
                })
            })
        }else if(operacaoEscolhida == '4'){
            console.log('Fatorial')

            entradaDeDados.question('Digite o fatorial que deseja calcular: ', function(entradaFatorial){

                let resultado = exercicio4.processarFatorial(Number(entradaFatorial))
                console.log(resultado)
                entradaDeDados.close()
                mostrarMenu()
            })
        }else if(operacaoEscolhida == '5'){
            console.log('Pares e Ímpares')

            entradaDeDados.question('Número inicial: ', function(numeroInicial){

                entradaDeDados.question('Número final: ', function(numeroFinal){

                    entradaDeDados.question('Opção (ambos, pares ou ímpares): ', function(opcao){

                        let resultado = exercicio5.processarNumeros(Number(numeroInicial), Number(numeroFinal), opcao)
                        console.log(resultado)
                        entradaDeDados.close()
                        mostrarMenu()
                    })
                })
            })
        }
    })
}
mostrarMenu()