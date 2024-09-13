/*
* objetivo: arquivo responsável pela criação de funções e estruturas de repetição 
* data: 06/09/24
* dev: giovanna
* versão: 1.0
*/

// Função para validar dados da média
function validarDadosMedia(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, valor1, valor2, valor3, valor4) {
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
    let status = true

    // Validar dados em branco
    if (aluno === '' || professor === '' || sexoP === '' || sexoA === '' || curso === '' || disciplina === '' ||
        nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
        console.log('ERRO: é obrigatório o preenchimento de todos os dados.')
        status = false

    // Verifica se as notas são números
    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: é obrigatório a entrada de dados numéricos nas notas.')
        status = false

    // Verifica se as notas estão entre 0 e 100
    }else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        console.log('ERRO: permitido somente valores entre 0 e 100 nas notas.')
        status = false
    }
    return status
}

// Função para validar a nota do exame
function validarNotaExame(exame) {
    let notaExame = exame
    let status = true

    // Validar entrada vazia
    if (notaExame === '') {
        console.log('ERRO: é obrigatório o preenchimento solicitado.')
        status = false

    // Validar se é número
    } else if (isNaN(notaExame)) {
        console.log('ERRO: só é permitido a entrada de números.')
        status = false

    // Validar se a nota está entre 0 e 100
    } else if (notaExame < 0 || notaExame > 100) {
        console.log('ERRO: a nota deve ser entre 0 e 100.');
        status = false
    }
    return status
}

// Função para calcular a média após o exame
function calcularExame(exame, mediaAnterior) {
    const mediaFinal = (mediaAnterior + Number(exame)) / 2;
    if (mediaFinal >= 60) {
        console.log('Aprovado no exame.')
        return mediaFinal
    } else {
        console.log('Reprovado no exame.')
        return mediaFinal
    }
}

//função para relatório
function exibirRelatorio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina){
    let generoAluno = sexoAluno
    let generoProfessor = sexoProfessor

    //verifica o gênero do aluno
    if(sexoAluno === 'F'){
        generoAluno = 'A aluna'
    }else{
        generoAluno = 'O aluno'
    }

    //verifica o gênero do professor
    if(sexoProfessor === 'F'){
        generoProfessor = 'Professora'
    }else{
        generoProfessor = 'Professor'
    }

    //exibir o relatório
    console.log(`${generoAluno} ${nomeAluno} foi ${situacao} na disciplina ${nomeDisciplina}.`)
    console.log(`Curso: ${nomeCurso}\n${generoProfessor}: ${nomeProfessor}`)
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia: ${mediaNota}`)
    if(notaExame !== null){
    console.log(`Média Final do Exame: ${mediaFinal}`)
    }


}

// Função para gerenciar a média - // se notaExame for null, significa que o aluno não fez exame
function calcularMedia(valor1, valor2, valor3, valor4, notaExame = null) {
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    let situacao
    let mediaNota
    let status = false

    // Valida as notas antes de calcular a média
    if (validarDadosMedia(nota1, nota2, nota3, nota4)) {
        // Cálculo da média
        mediaNota = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        status = true

        // Verifica a situação do aluno
        if (mediaNota > 70) {
            situacao = 'aprovado(a)'
        } else if (mediaNota < 50) {
            situacao = 'reprovado(a)'
        } else if (mediaNota >= 50 && mediaNota <= 69) {
            situacao = 'em exame'

            // Exame - se a nota do exame foi fornecida, realiza o cálculo
            if (notaExame !== null && validarNotaExame(notaExame)) {
                situacao = calcularExame(notaExame, mediaNota)
            } else {
                console.log('Nota do exame inválida ou não fornecida.')
            }
        }

        //relatório
        exibirRelatorio(aluno, sexoAluno, disciplina, curso, professor, sexoProfessor, nota1, nota2, nota3, nota4, notaExame)
    }
    return status
}
// Exemplo de chamada da função
console.log(calcularMedia(
    "Gabriel Soares",        // Nome do aluno
    "M",            // Sexo do aluno
    "Carlos",         // Nome do professor
    "M",            // Sexo do professor
    "Matemática",   // Curso
    "Geometria",   // Disciplina
    80,             // Nota 1
    60,             // Nota 2
    55,             // Nota 3
    70,             // Nota 4
))