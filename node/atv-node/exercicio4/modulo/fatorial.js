function fatorial(numero){
    let fatorial = numero
    let contador = fatorial
    let resultado = String(fatorial)
    let valor = 1
    while(contador >= 2){
        valor *= contador
        contador -= 1
        resultado = resultado + contador 

    }

    return resultado + ' = ' + valor
}
