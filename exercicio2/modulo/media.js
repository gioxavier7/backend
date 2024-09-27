/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

// função para validar dados da média
function validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, valor1, valor2, valor3, valor4){
    let status = true

    // validar dados em branco
    if(nomeAluno === '' || nomeProfessor === '' || sexoProfessor === '' || sexoAluno === '' || nomeCurso === '' || nomeDisciplina === '' ||
        valor1 === '' || valor2 === '' || valor3 === '' || valor4 === ''){
        console.log('ERRO: é obrigatório o preenchimento de todos os dados.')
        status = false

    // verifica se as notas são números
    } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
        console.log('ERRO: é obrigatório a entrada de dados numéricos nas notas.')
        status = false

    // verifica se as notas estão entre 0 e 100
    }else if (valor1 < 0 || valor1 > 100 || valor2 < 0 || valor2 > 100 || valor3 < 0 || valor3 > 100 || valor4 < 0 || valor4 > 100){
        console.log('ERRO: permitido somente valores entre 0 e 100 nas notas.')
        status = false
    }
    return status
}

// função para validar a nota do exame
function validarNotaExame(exame){
    let status = true

    // validar entrada vazia
    if(exame === ''){
        console.log('ERRO: é obrigatório o preenchimento solicitado.')
        status = false

    // validar se é número
    }else if (isNaN(exame)){
        console.log('ERRO: só é permitido a entrada de números.')
        status = false

    // validar se a nota está entre 0 e 100
    }else if(exame < 0 || exame > 100){
        console.log('ERRO: a nota deve ser entre 0 e 100.')
        status = false
    }
    return status
}

// função para calcular a média após o exame
function calcularExame(exame, mediaAnterior){
    return (mediaAnterior + Number(exame)) / 2
}

// função para calcular a média do aluno
function calcularMedia(valor1, valor2, valor3, valor4){
    return (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4
}

// função para determinar a situação do aluno
function calcularSituacao(mediaNota, notaExame = null){
    let situacao
    let mediaFinalExame = null

    if(mediaNota >= 70){
        situacao = 'Aprovado(a)'
    }else if(mediaNota < 50){
        situacao = 'Reprovado(a)'
    }else if(mediaNota >= 50 && mediaNota <= 69){
        situacao = 'Em exame'

        // exame - se a nota do exame foi fornecida, realiza o cálculo
        if(notaExame !== null && validarNotaExame(notaExame)){
            mediaFinalExame = calcularExame(notaExame, mediaNota)
            
            if(mediaFinalExame >= 60){
                situacao = 'aprovado(a) no exame'
            }else{
                situacao = 'reprovado(a) no exame'
            }
        }
    }

    return{situacao, mediaFinalExame}
}

// função para exibir o relatório do aluno
function exibirRelatorio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, mediaFinal, mediaFinalExame, situacao){
    let generoAluno
    let generoProfessor

    // verifica o gênero do aluno
    if(sexoAluno === 'F'){
        generoAluno = 'A aluna'
    }else{
        generoAluno = 'O aluno'
    }

    // verifica o gênero do professor
    if(sexoProfessor === 'F'){
        generoProfessor = 'Professora'
    }else{
        generoProfessor = 'Professor'
    }

    console.log(`Relatório do aluno:`)
    console.log(`${generoAluno} ${nomeAluno} está ${situacao} na disciplina ${nomeDisciplina}.`)
    console.log(`Curso: ${nomeCurso}`)
    console.log(`${generoProfessor}: ${nomeProfessor}`)
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)

    if(notaExame !== null){
        console.log(`Nota do exame: ${notaExame}`)
    }
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`)

    if (mediaFinalExame !== null) {
        console.log(`Média final do Exame: ${mediaFinalExame.toFixed(2)}`)
    }
}

// função principal para processar o cálculo e exibir o relatório
function processarNotas(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame = null){
    if(validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4)) {
        // calcula a média do aluno
        let mediaNota = calcularMedia(nota1, nota2, nota3, nota4)

        // calcula a situação e a média final se houve exame
        let {situacao, mediaFinalExame} = calcularSituacao(mediaNota, notaExame)

        // exibe o relatório
        exibirRelatorio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, mediaNota, mediaFinalExame, situacao)

        // retorna a situação do aluno
        return situacao
    }else{
        console.log('Erro ao processar as notas. Verifique os dados fornecidos.')
        return 'Erro ao processar'
    }
}

module.exports = {processarNotas}