//Object.preventExtensions
const produto = Object.preventExtensions({
nome: 'qualqe',
preco: 1.99,
tag:'promocao'
})
console.log('Extesivel>',Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = "borracha escolar branca"
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'a'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)