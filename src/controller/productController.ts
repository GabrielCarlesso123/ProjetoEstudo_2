import {Request, Response} from 'express'
import productService from '../service/productService'

class ProductController {
    async create(req: Request, res: Response) {
        await productService.createProduct(req.body)

        return res.status(201).send()
    }

    async list(req: Request, res: Response) {
        const productList = await productService.listProducts()

        return res.status(200).send(productList)
    }

    async stock(req: Request, res: Response) {
        const stockList = await productService.getStockList()

        return res.status(200).send(stockList)
    }

    async stockValue(req: Request, res: Response) {
        const stockValue = await productService.getStockValue()

        return res.status(200).json(stockValue)
    }
}


export default new ProductController()