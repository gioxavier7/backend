/*
 * objetivo: atividade juros composto
 * data: 09/08/24
 * dev: giovanna
 * versão: 1.0
 */

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para substituir vírgulas por pontos
function converterParaNumero(entrada) {
    return entrada.replace(',', '.');
}

// Função para verificar se a entrada é um número válido
function validarNumero(entrada) {
    // Substitui vírgulas por pontos e verifica se o resultado é um número
    const numero = Number(converterParaNumero(entrada));
    return !isNaN(numero) && entrada.trim() !== '';
}

// Entrada de dados
entradaDeDados.question('Digite o primeiro número: ', function(numero1) {
    if (!validarNumero(numero1)) {
        console.log('ERRO: o primeiro número é inválido.');
        entradaDeDados.close();
        return;
    }
    let primeiroNumero = Number(converterParaNumero(numero1));

    entradaDeDados.question('Digite o segundo número: ', function(numero2) {
        if (!validarNumero(numero2)) {
            console.log('ERRO: o segundo número é inválido.');
            entradaDeDados.close();
            return;
        }
        let segundoNumero = Number(converterParaNumero(numero2));

        // Variáveis para escolha das operações
        let soma;
        let subtracao;
        let multiplicacao;
        let divisao;
        let resultado;
        let status = true; // Usada para verificar divisão por 0
        
        entradaDeDados.question('Escolha a operação (+-*/): ', function(operação) {
            let operacaoEscolhida = operação.trim();

            // Verifica se as operações estão corretas
            if (operacaoEscolhida !== '+' && operacaoEscolhida !== '-' && operacaoEscolhida !== '*' && operacaoEscolhida !== '/') {
                console.log('ERRO: escolha as seguintes operações: +-*/');
            } else {
                if (operacaoEscolhida === '+') {
                    soma = primeiroNumero + segundoNumero;
                    resultado = soma.toFixed(2);
                } else if (operacaoEscolhida === '-') {
                    subtracao = primeiroNumero - segundoNumero;
                    resultado = subtracao.toFixed(2);
                } else if (operacaoEscolhida === '*') {
                    multiplicacao = primeiroNumero * segundoNumero;
                    resultado = multiplicacao.toFixed(2);
                } else if (operacaoEscolhida === '/') {
                    if (segundoNumero === 0) {
                        console.log('ERRO: não é possível realizar divisão por 0.');
                        status = false;
                    } else {
                        divisao = primeiroNumero / segundoNumero;
                        resultado = divisao.toFixed(2);
                    }
                }

                if (status) {
                    console.log(`O resultado é ${resultado}`);
                }
            }
            entradaDeDados.close(); // Fecha a interface de entrada
        });
    });
});
