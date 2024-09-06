/*
* objetivo: manipular entrada e saída de dados pelo usuário no terminal
* data: 02/08/24
* dev: giovanna
* versão: 1.0
*/

//import da biblioteca readline, que é responsável por manipular entrada de dado via terminal
var readline = require('readline')

//cria um objeto para realizar a entrada de dados pelo teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//função callback para receber o valor digitado do nome pelo usuário no terminal
entradaDeDados.question('digite seu nome: ', function(nome){
    var nomeUsuario = nome

   // console.log('o nome do usuário é: ' + nomeUsuario)

    entradaDeDados.question('digite seu e-mail: ', function(email){
        var emailUsuario = email

        entradaDeDados.question('digite seu curso: ', function(curso){
            var cursoUsuario = curso

            console.log(`O e-mail do usuário ${nomeUsuario} é ${emailUsuario} e está matriculado no curso ${cursoUsuario}`)
            entradaDeDados.close() //finalizar a interface de digitação do usuário 
        })
    })
})