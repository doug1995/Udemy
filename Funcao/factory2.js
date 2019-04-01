function criarProduto(nome,preco){
    return{
        nome:nome,
        preco:preco,
        desconto:2
    }
}

console.log(criarProduto('douglas',2.50))