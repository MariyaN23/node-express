import {Request, Response, Router} from "express";
import {productsRepository} from "../../repositories/products-repository";

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProduct = productsRepository.findProduct(req.query.title?.toString())
    res.send(foundProduct)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.findProductById(+req.params.id)
    product ? res.send(product) : res.send(404)
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body.title)
    res.status(200).send(newProduct)
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)
    isUpdated
        ? res.send(productsRepository.findProductById(+req.params.id))
        : res.send(404)
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    isDeleted ? res.send(204) : res.send(404)
})