const imprimirResultado  = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        default:
            console.log('Nota inválida')

    }
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(2.3)