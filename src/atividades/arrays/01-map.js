const nums = [1, 2, 3, 4, 5]

const dobro = n => n * 2

const resultado = nums.map(item => item * 2)

// console.log('resultado', resultado)

// console.log(nums.map(dobro))

const nomes = ['Ana', 'Guilherme', 'Tiago', 'Luana', 'Soldado', 'Versales']
const letras = nomes.map(text => text)

//console.log(letras)

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

// 1 utilizando mostrar somente os nomes dos produtos no carrinho
const getNome = carrinho.map(produto => {
    console.log(produto.nome)
})

console.log(getNome)
// 2 exibam um array com a multiplicação da qtde pelo preco
const getValor = carrinho.map(produto => produto.qtde * produto.preco)

console.log(getValor)