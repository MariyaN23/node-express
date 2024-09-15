import {NextFunction, Request, Response, Router} from "express";
import {productsRepository} from "../../repositories/products-repository";

export const productsRouter = Router({})

//middleware
const createdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.blabla = "Hello"
    next()
}
const authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    if (req.query.token === "123") {
        next()
    } else {
        res.send(401)
    }
}
//if in query http://localhost:5000/products?token=123 - ok, next
//else - Unauthorized

let requestsCount = 0
const requestsCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
    requestsCount++
    next()
}
productsRouter.use(requestsCountMiddleware) //count number of requests
productsRouter.use(createdMiddleware)
productsRouter.use(authGuardMiddleware)

productsRouter.get('/', (req: Request, res: Response) => {
    // @ts-ignore
    const blabla = req.blabla
    res.send({value: blabla + "!!!!" + requestsCount})
})
/*productsRouter.get('/', (req: Request, res: Response) => {
    const foundProduct = productsRepository.findProduct(req.query.title?.toString())
    res.send(foundProduct)
})*/
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