/*
* objetivo: atividade juros composto
* data: 09/08/24
* dev: giovanna
* versão: 1.0
*/

//import da biblioteca
var readline = require('readline')

//realiza a entrada de dados
var calcularJuros = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//callback
calcularJuros.question('Digite o capital inicial: ', function(capital){
    var capitalInicial = capital

    calcularJuros.question('Digite a taxa de juros anual (em decimal): ', function(taxa){
        var taxaAnual = taxa

        calcularJuros.question('Digite quantas vezes que os jurão são compostos por ano (n): ', function(n){
            var jurosAnual = n

            calcularJuros.question('Digite o tempo (em anos): ', function(t){
                var tempoAnual = t

                //calculo
                var montante = Number(capitalInicial * (1 + Number(taxaAnual) / Number(jurosAnual)) ** Number(jurosAnual) * Number(tempoAnual))

                console.log(`o montante final é -> ${montante}`)

            //encerrar callback
            calcularJuros.close()
            })
        })
    })
})