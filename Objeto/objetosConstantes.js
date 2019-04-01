// pessoa -> 123 ->{....}
const pessoa = {nome :'Joao'}



Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)