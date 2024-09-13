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

// Função para validar dados da média
function validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, valor1, valor2, valor3, valor4) {
    let aluno = nomeAluno;
    let professor = nomeProfessor;
    let sexoP = sexoProfessor;
    let sexoA = sexoAluno;
    let curso = nomeCurso;
    let disciplina = nomeDisciplina;
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;

    // Validar dados em branco
    if (aluno === '' || professor === '' || sexoP === '' || sexoA === '' || curso === '' || disciplina === '' ||
        nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
        console.log('ERRO: é obrigatório o preenchimento de todos os dados.');
        return false;

    // Verifica se as notas são números
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: é obrigatório a entrada de dados numéricos nas notas.');
        return false;

    // Verifica se as notas estão entre 0 e 100
    } else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        console.log('ERRO: permitido somente valores entre 0 e 100 nas notas.');
        return false;
    }
    return true;
}

// Função para validar a nota do exame
function validarNotaExame(exame) {
    let notaExame = exame;

    // Validar entrada vazia
    if (notaExame === '') {
        console.log('ERRO: é obrigatório o preenchimento solicitado.');
        return false;

    // Validar se é número
    } else if (isNaN(notaExame)) {
        console.log('ERRO: só é permitido a entrada de números.');
        return false;

    // Validar se a nota está entre 0 e 100
    } else if (notaExame < 0 || notaExame > 100) {
        console.log('ERRO: a nota deve ser entre 0 e 100.');
        return false;
    }
    return true;
}

// Função para calcular a média após o exame
function calcularExame(exame, mediaAnterior) {
    const mediaFinal = (mediaAnterior + Number(exame)) / 2;
    if (mediaFinal >= 60) {
        console.log('Aprovado no exame.');
        return 'Aprovado no exame';
    } else {
        console.log('Reprovado no exame.');
        return 'Reprovado no exame';
    }
}

//função para relatório
function exibirRelatorio(){}

// Função para gerenciar a média - // se notaExame for null, significa que o aluno não fez exame
function calcularMedia(valor1, valor2, valor3, valor4, notaExame = null) {
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;
    let situacao;
    let mediaNota;
    let status = false

    // Valida as notas antes de calcular a média
    if (validarDadosMedia("Aluno", "Professor", "M", "M", "Curso", "Disciplina", nota1, nota2, nota3, nota4)) {
        // Cálculo da média
        mediaNota = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        status = true

        // Verifica a situação do aluno
        if (mediaNota > 70) {
            situacao = 'Aprovado.';
        } else if (mediaNota < 50) {
            situacao = 'Reprovado.';
        } else if (mediaNota >= 50 && mediaNota <= 69) {
            situacao = 'Em exame.';

            // Exame - se a nota do exame foi fornecida, realiza o cálculo
            if (notaExame !== null && validarNotaExame(notaExame)) {
                situacao = calcularExame(notaExame, mediaNota);
            } else {
                console.log('Nota do exame inválida ou não fornecida.');
            }
        }

        console.log(`Média Final: ${mediaNota}\nSituação: ${situacao}`);
    }
    return status
}
