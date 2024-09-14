/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

// Função para validar dados da média
function validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, valor1, valor2, valor3, valor4) {
    let status = true

    //substituição de vírgula por ponto
    valor1 = valor1.toString().replace(',', '.')
    valor2 = valor2.toString().replace(',', '.')
    valor3 = valor3.toString().replace(',', '.')
    valor4= valor4.toString().replace(',', '.')

    // Validar dados em branco
    if (nomeAluno === '' || nomeProfessor === '' || sexoProfessor === '' || sexoAluno === '' || nomeCurso === '' || nomeDisciplina === '' ||
        valor1 === '' || valor2 === '' || valor3 === '' || valor4 === '') {
        console.log('ERRO: é obrigatório o preenchimento de todos os dados.')
        status = false

    // Verifica se as notas são números
    } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
        console.log('ERRO: é obrigatório a entrada de dados numéricos nas notas.')
        status = false

    // Verifica se as notas estão entre 0 e 100
    } else if (valor1 < 0 || valor1 > 100 || valor2 < 0 || valor2 > 100 || valor3 < 0 || valor3 > 100 || valor4 < 0 || valor4 > 100) {
        console.log('ERRO: permitido somente valores entre 0 e 100 nas notas.')
        status = false
    }
    return status
}

// Função para validar a nota do exame
function validarNotaExame(exame) {
    let status = true
    
    //substitui vírgula por ponto
    exame = exame.toString().replace(',', '.')

    // Validar entrada vazia
    if (exame === '') {
        console.log('ERRO: é obrigatório o preenchimento solicitado.')
        status = false

    // Validar se é número
    } else if (isNaN(exame)) {
        console.log('ERRO: só é permitido a entrada de números.')
        status = false

    // Validar se a nota está entre 0 e 100
    } else if (exame < 0 || exame > 100) {
        console.log('ERRO: a nota deve ser entre 0 e 100.')
        status = false
    }
    return status
}

// Função para calcular a média após o exame
function calcularExame(exame, mediaAnterior) {
    return (mediaAnterior + Number(exame)) / 2
}

// Função para calcular a média do aluno
function calcularMedia(valor1, valor2, valor3, valor4) {
    return (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4
}

// Função para determinar a situação do aluno
function calcularSituacao(mediaNota, notaExame = null) {
    let situacao
    let mediaFinalExame = null

    if (mediaNota >= 70) {
        situacao = 'aprovado(a)'
    } else if (mediaNota < 50) {
        situacao = 'reprovado(a)'
    } else if (mediaNota >= 50 && mediaNota <= 69) {
        situacao = 'em exame'

        // Exame - se a nota do exame foi fornecida, realiza o cálculo
        if (notaExame !== null && validarNotaExame(notaExame)) {
            mediaFinalExame = calcularExame(notaExame, mediaNota)
            situacao = mediaFinalExame >= 60 ? 'aprovado(a) no exame' : 'reprovado(a) no exame'
        }
    }

    return {situacao, mediaFinalExame}
}

// Função para exibir o relatório do aluno
function exibirRelatorio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, mediaFinal, mediaFinalExame, situacao) {
    let generoAluno
    let generoProfessor

    // Verifica o gênero do aluno
    if (sexoAluno === 'F') {
        generoAluno = 'A aluna'
    } else {
        generoAluno = 'O aluno'
    }

    // Verifica o gênero do professor
    if (sexoProfessor === 'F') {
        generoProfessor = 'Professora'
    } else {
        generoProfessor = 'Professor'
    }

    console.log(`Relatório do aluno:`)
    console.log(`${generoAluno} ${nomeAluno} foi ${situacao} na disciplina ${nomeDisciplina}.`)
    console.log(`Curso: ${nomeCurso}`)
    console.log(`${generoProfessor}: ${nomeProfessor}`)
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)

    if (notaExame !== null) {
        console.log(`Nota do exame: ${notaExame}`)
    }
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`)

    if (mediaFinalExame !== null) {
        console.log(`Média final do Exame: ${mediaFinalExame.toFixed(2)}`)
    }
}

// Função principal para processar o cálculo e exibir o relatório
function processarNotas(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame = null) {
    if (validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4)) {
        // Calcula a média do aluno
        let mediaNota = calcularMedia(nota1, nota2, nota3, nota4)

        // Calcula a situação e a média final se houve exame
        let {situacao, mediaFinalExame} = calcularSituacao(mediaNota, notaExame)

        // Exibe o relatório
        exibirRelatorio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, mediaNota, mediaFinalExame, situacao)

        // Retorna a situação do aluno
        return situacao
    } else {
        console.log('Erro ao processar as notas. Verifique os dados fornecidos.')
        return 'Erro ao processar'
    }
}

// Exemplo de chamada da função
console.log(processarNotas(
    "Gabriel Soares",        // Nome do aluno
    "M",                     // Sexo do aluno
    "Carlos",                // Nome do professor
    "M",                     // Sexo do professor
    "Matemática",            // Curso
    "Geometria",             // Disciplina
    100,                      // Nota 1
    90,                      // Nota 2
    89,                      // Nota 3
    90.5,                      // Nota 4
                       // Nota do exame (opcional, se houver)
))
