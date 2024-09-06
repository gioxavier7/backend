/*
* objetivo: conhecer os primeiros comandos de JS no node.js
* data: 02/08/24
* dev: giovanna
* versão: 1.0
*/

//permite escrever uma mensagem no terminal
console.log('exercício 01 de node.js')

/**
 * formas de criar variáveis em JS
 * 
 *  var -> permite criar um espaço de memória, podendo ser alterado no decorer
 *      do projeto, essa variável deve ser criada no escopo global do código,
 *      ou seja, existe em todos os blocos de programação
 *      
 *  let -> permite criar um espaço de memória, podendo ser alterado no decorer
 *      do projeto, essa variável deve ser criada no escopo local do código,
 *      ou seja, nasce e morre dentro daquele bloco de programação.
 * 
 * const —> As constantes não podem ser alteradas, não sofre alteração durante
 *  o projeto pode ser usado no escopo global e local
 */

var nome = 'giovanna'
var valor1 = '10'
var valor2 = '20.5'
var resultado

//concatenar -> juntar conteúdos
console.log('o nome do usuário é: ' + nome)


//typeoff -> permite identificar o tipo de dados de uma variável
console.log(typeof(nome))

resultado = parseFloat(valor1) + parseFloat(valor2)

console.log(resultado)