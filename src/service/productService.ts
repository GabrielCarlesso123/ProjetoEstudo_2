import { writeFile, readFile } from 'fs/promises'

class ProductService {

    async createProduct(data) {
        await writeFile('products.json', JSON.stringify(data, null, 2))
    }

    async listProducts() {
        const productList = await readFile('products.json', "utf8")

        return JSON.parse(productList)
    }

    async getStockList() {
        const productList = await this.listProducts()

        const stock = productList.map(produto => {
            let obj = {
                nome: produto.nome,
                qtde: produto.qtde,
                preco: produto.preco,
                valor_estoque: produto.qtde * produto.preco
            }
            return obj
        })

        return stock
    }

    async getStockValue() {
        const stockList = await this.getStockList()

        const stockValue = stockList.reduce((acc, proximo) => {
            return acc + proximo.valor_estoque
        },0)

        return stockValue
    }
}

export default new ProductService()