/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

// função para validar os dados IMC
function validarDadosImc(peso, altura){
    if (peso == '' || altura == ''){
        console.log("ERRO: é obrigatório a entrada dos dados.")
        return false
    }
    else if (isNaN(peso) || isNaN(altura)){
        console.log("ERRO: não é permitido a entrada de caracteres.")
        return false
    }
    return true
}

// função para converter o número para string (toString), substitui a vírgula por ponto, e depois converte de volta para número
function converterVirgula(valor){
    return valor.toString().replace(',', '.')
}

// calculo IMC
function calcularIMC(peso, altura){
    let numeroPeso = peso
    let numeroAltura = altura
    let imc
    let categoriaImc
    let status = false

    if (validarDadosImc(numeroPeso, numeroAltura)){
        imc = converterVirgula(numeroPeso) / (converterVirgula(numeroAltura) * converterVirgula(numeroAltura))
        status = true

        //verificação do IMC
        if(imc < 18.5){
            categoriaImc = 'Abaixo do peso'
        }else if(imc >= 18.5 && imc <= 24.9){
            categoriaImc = 'Peso normal'
        }else if(imc >= 25 && imc <= 29.9){
            categoriaImc = 'Acima do peso'
        }else if(imc >= 30 && imc <= 34.9){
            categoriaImc = 'Obesidade I'
        }else if(imc >= 35 && imc <= 39.9){
            categoriaImc = 'Obesidade II'
        }else if(imc >= 40){
            categoriaImc = 'Obesidade III'
        }

        console.log(`IMC calculado: ${imc.toFixed(2)}\nCategoria: ${categoriaImc}`)
    }
    return status
}

//validar dados da média
function validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, valor1, valor2, valor3, valor4){
    let aluno = nomeAluno
    let professor = nomeProfessor
    let sexoP = sexoProfessor
    let sexoA = sexoAluno
    let curso = nomeCurso
    let disciplina = nomeDisciplina
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    //validar dados em branco
    if(aluno == '' || professor == '' || sexoP == '' || sexoA == '' || curso == '' || disciplina == ''
        || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('ERRO: é obrigatório o preenchimento de todos os dados.')
        return false

    //verifica se as notas são números
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('ERRO: é obrigatório a entrada de dados numéricos nas notas.')
        return false

    // verifica se as notas estão entre 0 e 100
    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
        console.log('ERRO: permitido somente valores entre 0 e 100 nas notas.')
        return
    }
    return true
}

function validarNotaExame(exame){
    let notaExame = exame

    //validar entrada vazia
    if(notaExame == ''){
        console.log('ERRO: é obrigatório o preenchimendo solicitado.')
        return false

    //validar se é número
    }else if(isNaN(notaExame)){
        console.log('ERRO: só é permitido a entrada de números.')
        return false

    //validar se a nota está entre 0 e 100
    }else if(notaExame < 0 || notaExame > 100){
        console.log('ERRO: a nota deve ser entre 0 e 100.')
        return false
    }
    return true
}

// função para gerenciar média
function calcularMedia(valor1, valor2, valor3, valor4){
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    let situacao
    let resultado

    if(validarDadosMedia(nota1, nota2, nota3, nota4)){
        //calculo da média
        resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

        //verificar a situação do aluno
        if(resultado > 70){
            situacao = 'Aprovado.'
        }else if(resultado < 50){
            situacao = 'Reprovado.'
        }else if(resultado >= 50 && resultado <= 69){
            situacao = 'Em exame.'
        }
    }
}